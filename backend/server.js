const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gannis"
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Endpoint de prueba
app.get('/', (req, res) => {
    return res.json("Servidor funcionando");
});

app.post('/api/login', (req, res) => {
    const { mail, password } = req.body;
    db.query('SELECT * FROM usuarios WHERE mail = ?', [mail], (err, results) => {
        if (err) throw err;
        if (results.length > 0 && results[0].contrasena == password) {
            const user = results[0];
            //console.log(user);
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            return res.json({ auth: true, token, email: user.mail});
        }
        res.status(401).json({ auth: false, message: 'Credenciales invalidas' });
    });
});

// Obtener mascotas
app.get('/api/mascotas', (req, res) => {
    const sql = "SELECT * FROM mascotas";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error en la consulta a la base de datos:', err);
            return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
        }
        const mascotasConImagenes = data.map(mascota => ({
            ...mascota,
            img: mascota.image ? `http://localhost:8081/uploads/${mascota.image}` : null
        }));
        return res.json(mascotasConImagenes);
    });
});

// Agregar una nueva mascota
app.post('/api/mascotas', upload.single('img'), (req, res) => {
    const { nombre, edad, tamano, peso } = req.body;
    const sqlInsert = "INSERT INTO mascotas (nombre, edad, tamano, peso) VALUES (?, ?, ?, ?)";
    const values = [nombre, edad, tamano, peso];

    db.query(sqlInsert, values, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar la mascota' });

        const mascotaId = result.insertId;

        if (req.file) {
            const extension = path.extname(req.file.originalname);
            const nuevoNombre = `${mascotaId}${extension}`;
            const oldPath = path.join(__dirname, req.file.path);
            const newPath = path.join(__dirname, 'uploads', nuevoNombre);

            fs.rename(oldPath, newPath, (err) => {
                if (err) return res.status(500).json({ error: 'Error al mover la imagen' });

                const sqlUpdate = "UPDATE mascotas SET image = ? WHERE id = ?";
                db.query(sqlUpdate, [nuevoNombre, mascotaId], (err) => {
                    if (err) return res.status(500).json({ error: 'Error al actualizar la base de datos con la imagen' });
                    return res.status(201).json({ message: 'Mascota añadida con éxito', id: mascotaId, img: nuevoNombre });
                });
            });
        } else {
            res.status(201).json({ message: 'Mascota añadida con éxito sin imagen', id: mascotaId });
        }
    });
});

// Eliminar una mascota
app.delete('/api/mascotas/:id', (req, res) => {
    const id = req.params.id;
    console.log("ID recibido para eliminar:", id); // Depuración

    const sqlSelect = "SELECT * FROM mascotas WHERE id = ?";
    db.query(sqlSelect, [id], (err, results) => {
        if (err) {
            console.error('Error en la consulta a la base de datos:', err);
            return res.status(500).json({ error: 'Error en la consulta a la base de datos' });
        }
        if (results.length === 0) {
            console.log("Mascota no encontrada con ID:", id); // Depuración
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }

        const sqlDelete = "DELETE FROM mascotas WHERE id = ?";
        db.query(sqlDelete, [id], (err) => {
            if (err) {
                console.error('Error al eliminar la mascota:', err);
                return res.status(500).json({ error: 'Error al eliminar la mascota' });
            }
            return res.status(204).send(); // Éxito, sin contenido
        });
    });
});

// Endpoint para actualizar una mascota
app.put('/api/mascotas/:id', upload.single('img'), (req, res) => {
    const id = req.params.id;
    const { nombre, edad, tamano, peso } = req.body;
    let sqlUpdate = "UPDATE mascotas SET nombre = ?, edad = ?, tamano = ?, peso = ? WHERE id = ?";
    const values = [nombre, edad, tamano, peso, id];

    db.query(sqlUpdate, values, (err) => {
        if (err) {
            console.error('Error al actualizar la mascota:', err);
            return res.status(500).json({ error: 'Error al actualizar la mascota' });
        }

        // Si hay una nueva imagen, actualiza también la imagen
        if (req.file) {
            const extension = path.extname(req.file.originalname);
            const nuevoNombre = `${id}${extension}`;
            const oldPath = path.join(__dirname, req.file.path);
            const newPath = path.join(__dirname, 'uploads', nuevoNombre);

            fs.rename(oldPath, newPath, (err) => {
                if (err) return res.status(500).json({ error: 'Error al mover la imagen' });

                const sqlImgUpdate = "UPDATE mascotas SET image = ? WHERE id = ?";
                db.query(sqlImgUpdate, [nuevoNombre, id], (err) => {
                    if (err) return res.status(500).json({ error: 'Error al actualizar la imagen' });
                    return res.status(200).json({ message: 'Mascota actualizada con éxito' });
                });
            });
        } else {
            return res.status(200).json({ message: 'Mascota actualizada con éxito sin nueva imagen' });
        }
    });
});

// Iniciar el servidor
app.listen(8081, () => {
    console.log("Escuchando en el puerto 8081");
});
