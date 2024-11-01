// src/views/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMascotas } from '../redux/actions/mascotaActions';
import Carousel from '../components/Carousel/Carousel';
import Breadcrumbs from '../components/BreadCrumbs';
import '../ui/Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const { mascotas, loading, error } = useSelector(state => state.mascotas);

    useEffect(() => {
        dispatch(fetchMascotas());
    }, [dispatch]);

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
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <Breadcrumbs />
            <div className="text-center mt-4">
                <h1>Bienvenidos a Gannis</h1>
                <div className="d-flex justify-content-center flex-wrap">
                    <Carousel mascotas={mascotas} />
                </div>
            </div>
        </div>
    );
};

export default Home;
