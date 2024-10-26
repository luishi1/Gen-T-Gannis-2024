// src/views/Home.js
import React from 'react';
import Card from '../components/Card/Card';

const Home = () => {
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
