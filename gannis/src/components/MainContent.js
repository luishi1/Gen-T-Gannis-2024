// src/components/MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Register from '../views/Register'

const MainContent = () => {
    return (
        <main className="d-flex flex-wrap justify-content-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    );
};

export default MainContent;
