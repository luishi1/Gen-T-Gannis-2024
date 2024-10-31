// src/views/Home.js
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Breadcrumbs from '../components/BreadCrumbs';
import '../ui/Home.css'

const Home = () => {

    const [mascotas, setMascotas] = useState([]);

    const fetchMascotas = async () => {
        console.log("Emtro al metodo de fetch mascotas")
        try {
            const response = await fetch('http://localhost:8081/api/mascotas');

            if (!response.ok) {
                throw new Error('No se puede obtener los datos del server')
            }
            const data = await response.json()
            setMascotas(data);
            console.log(data)
        } catch (error) {
            console.log("Algo fallo al cargar a los animalitos");
        }
    }

    useEffect(() => {
        fetchMascotas();
    }, []);

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
            <Breadcrumbs />
            <div className="text-center">
                <h1>Bienvenidos a Gannis</h1>
                <p>Esta es la página de inicio.</p>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        mascotas.map((m) => (
                            <Card key={m.id} title={m.nombre} text={m.especificaciones} imageUrl="url_de_imagen_gato_1" />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
