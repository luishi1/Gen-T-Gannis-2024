// src/components/MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Register from '../views/Register';
import Forms from '../views/AltaMascotas';
import Mascotas from '../views/Mascotas';

const MainContent = () => {
    return (
        <main className="d-flex flex-wrap justify-content-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/login" element={user ? <Login /> : <Navigate to="/" />}  /> */}
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/mascotas" element={<Mascotas />} />
            </Routes>
        </main>
    );
};

export default MainContent;
