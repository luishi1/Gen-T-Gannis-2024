const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gannis"
})

app.get('/', (re, res) => {
    return res.json("backkkk");
})

app.listen(8081, () => {
    console.log("cuchando")
})

app.get('/api/mascotas', (req, res) => {
    const sql = "SELECT * FROM mascotas";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/api/mascotas', (req, res) => {
    const { nombre, edad, tamano, peso, nivel_de_actividad, especificaciones } = req.body;

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