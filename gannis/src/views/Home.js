// src/views/Home.js
import React from 'react';
import Card from '../components/Card/Card';
import './Home.css'

const Home = () => {
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
                    <Card title="Silvestre" text="Macho / 3 meses" imageUrl="url_de_imagen_gato_1" />
                    <Card title="LOCURA" text="Hembra / 2 meses" imageUrl="url_de_imagen_gato_2" />
                    <Card title="BEN 10" text="Macho / 1 mes" imageUrl="url_de_imagen_gato_3" />
                </div>
            </div>
        </div>
    );
};

export default Home;
