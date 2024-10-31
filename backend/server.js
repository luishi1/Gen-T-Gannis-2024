const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

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

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gannis"
});

app.get('/', (req, res) => {
    return res.json("backkkk");
});

app.listen(8081, () => {
    console.log("Escuchando en el puerto 8081");
});

app.get('/api/mascotas', (req, res) => {
    const sql = "SELECT * FROM mascotas";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);

        const mascotasConImagenes = data.map(mascota => {
            return {
                ...mascota,
                img: mascota.id ? `http://localhost:8081/uploads/${mascota.image}` : null
            };
        });

        return res.json(mascotasConImagenes);
    });
});

app.post('/api/mascotas', upload.single('img'), (req, res) => {
    const { nombre, edad, tamano, peso } = req.body;

    const sqlInsert = "INSERT INTO mascotas (nombre, edad, tamano, peso) VALUES (?, ?, ?, ?)";
    const values = [nombre, edad, tamano, peso];

    db.query(sqlInsert, values, (err, result) => {
        if (err) return res.status(500).json({ error: err });

        const mascotaId = result.insertId;

        if (req.file) {
            const extension = path.extname(req.file.originalname);
            const nuevoNombre = `${mascotaId}${extension}`;
            const oldPath = path.join(__dirname, req.file.path);
            const newPath = path.join(__dirname, 'uploads', nuevoNombre);

            if (!req.file || !req.file.path) {
                console.log("Archivo no encontrao o no se subio correctamente");
                return res.status(400).json({ error: "Archivo no encontrao" });
            }

            fs.copyFile(oldPath, newPath, (err) => {
                if (err) {
                    console.error("Error copiando archivo:", err);
                    return res.status(500).json({ error: 'Error copiando la imagen' });
                }
                console.log("Archivo copiado exitosamente a", newPath);
            
                fs.unlink(oldPath, (err) => {
                    if (err) {
                        console.error("Error eliminando archivo original:", err);
                        return res.status(500).json({ error: 'Error eliminando archivo temporal' });
                    }
                    console.log("Archivo temporal eliminado:", oldPath);
            
                    const sqlUpdate = "UPDATE mascotas SET image = ? WHERE id = ?";
                    db.query(sqlUpdate, [nuevoNombre, mascotaId], (err) => {
                        if (err) {
                            console.error("Error en el UPDATE:", err);
                            return res.status(500).json({ error: 'Error al actualizar la base de datos' });
                        }
            
                        console.log("Actualizacion en la base de datos exitosa yujuuu");
                        return res.status(201).json({ message: 'Mascota añadida con exito', id: mascotaId, img: nuevoNombre });
                    });
                });
            });
        } else {
            res.status(201).json({ message: 'Mascota añadida con exito sin imagen', id: mascotaId });
        }
    });
});


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length > 0) {
            return res.status(200).json({ message: 'SUCCESS' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});