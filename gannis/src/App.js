import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent'; // Asegúrate de que la ruta sea correcta
import Footer from './components/layouts/footer';
import './App.css'

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <BrowserRouter>
            <div className={darkMode ? 'app dark-mode' : 'app'}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <MainContent />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
