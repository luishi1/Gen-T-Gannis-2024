// src/components/MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Register from '../views/Register';
import Forms from '../views/AltaMascotas';
import Cats from '../views/Cats'; 
import Dogs from '../views/Dogs'; 
import Pets from '../views/Pets'; 

const MainContent = () => {
    return (
        <main className="d-flex flex-wrap justify-content-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/Cats" element={<Cats />} /> 
                <Route path="/Dogs" element={<Dogs />} /> 
                <Route path="/Pets" element={<Pets />} /> 
            </Routes>
        </main>
    );
};

export default MainContent;
