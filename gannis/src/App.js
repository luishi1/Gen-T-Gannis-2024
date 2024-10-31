// src/App.js
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent'; // Asegúrate de que la ruta sea correcta
import Footer from './components/layouts/footer';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <BrowserRouter>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent />
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
