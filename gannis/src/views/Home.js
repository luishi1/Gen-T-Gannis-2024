// src/views/Home.js
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import '../ui/Home.css'

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
        <div className='home-cont'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="1.png" className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* Puedes agregar contenido aquí si es necesario */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="2.png" className="d-block w-100" alt="Slide 2" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* Puedes agregar contenido aquí si es necesario */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="3.png" className="d-block w-100" alt="Slide 3" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* Puedes agregar contenido aquí si es necesario */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-center">
                <h1>Bienvenidos a Gannis</h1>
                <p>Esta es la página de inicio.</p>
                <div className="d-flex justify-content-center flex-wrap">
                    <Card
                        id="1"
                        nombre="Miau soy un gato"
                        sexo="Macho"
                        edad="4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
