const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
        return res.json(data);
    });
});

app.post('/api/mascotas', upload.single('img'), (req, res) => {
    const { nombre, edad, tamano, peso, nivel_de_actividad, especificaciones } = req.body;
    const imagen = req.file ? req.file.filename : null; 

    const sql = "INSERT INTO mascotas (nombre, edad, tamano, peso, nivel_de_actividad, especificaciones) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [nombre, edad, tamano, peso, nivel_de_actividad, especificaciones];

    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Mascota añadida con éxito', result });
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