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
