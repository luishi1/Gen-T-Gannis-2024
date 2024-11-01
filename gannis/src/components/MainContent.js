// src/components/MainContent.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Register from '../views/Register';
import Forms from '../views/AltaMascotas';
import Mascotas from '../views/Mascotas';
import DashboardAdmin from '../views/DashboardAdmin';
import EditarMascota from '../views/EditarMascota';

const MainContent = () => {
    const token = useSelector(state => state.users.token);
    const isLoggedIn = !!token;

    return (
        <main className="d-flex flex-wrap justify-content-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={isLoggedIn ? <Navigate to="/"/> :  <Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={isLoggedIn ? <Navigate to="/"/> :  <Register />} />
                <Route path="/forms" element={isLoggedIn ? <Forms /> : <Navigate to="/" />} />
                <Route path="/mascotas" element={<Mascotas />} />
                <Route path="/dashboard-admin" element={isLoggedIn ? <DashboardAdmin /> : <Navigate to="/" />}/>
                <Route path="/editar-mascota/:id" element={isLoggedIn ? <EditarMascota /> : <Navigate to="/" />} />
            </Routes>
        </main>
    );
};

export default MainContent;
