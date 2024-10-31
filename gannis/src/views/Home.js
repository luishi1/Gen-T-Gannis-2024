// src/views/Home.js
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

const Home = () => {

    const [mascosas, setMascotas] = useState([]);

    const fetchMascotas = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/mascotas');
            if (!response.ok) {
                throw new Error('No se puede obtener los datos del server')
            }
            const data = await response.json()
            setMascotas(data);
        } catch (error) {
            console.log("Algo fallo al cargar a los animalitos");
        }
    }

    return (
        <div className="text-center">
            <h1>Bienvenidos a Gannis</h1>
            <p>Esta es la página de inicio.</p>
            <div className="d-flex justify-content-center flex-wrap">
                <Card title="Silvestre" text="Macho / 3 meses" imageUrl="url_de_imagen_gato_1" />
                <Card title="LOCURA" text="Hembra / 2 meses" imageUrl="url_de_imagen_gato_2" />
                <Card title="BEN 10" text="Macho / 1 mes" imageUrl="url_de_imagen_gato_3" />
            </div>
        </div>
    );
};

export default Home;
