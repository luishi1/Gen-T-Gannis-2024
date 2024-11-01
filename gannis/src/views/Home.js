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

    const token = useSelector(state => state.users.token);
    const email = useSelector(state => state.users.email);

    const isLoggedIn = !!token; // Chequear si el token existe

    //console.log(email); //para ver si esta definido "email"

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
                {isLoggedIn ? ( // ternario epico en react
                    <div>
                        <h2>Welcome back, {email}!</h2> {/* asi se usa una variable de sesion papu */}
                    </div>
                ) : (
                    <div>
                        <h2>Por favor, inicie sesion.</h2>
                    </div>
                )}
                <div className="d-flex justify-content-center flex-wrap">
                    <Carousel mascotas={mascotas} />
                </div>
            </div>
        </div>
    );
};

export default Home;
