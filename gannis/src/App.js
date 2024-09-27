import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import DarkModeToggle from './components/DarkModeToggle';
import Card from './components/Card/Card';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-orange-500 text-black'}>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <a className="navbar-brand" href="#">Gannis</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gatos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Perros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre Nosotros</a>
            </li>
          </ul>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <button className="btn btn-secondary ml-2">Iniciar Sesión</button>
          <button className="btn btn-secondary ml-2">Registrarse</button>
        </div>
      </nav>

      <div className="container my-4">
        <h1 className="text-center">Bienvenidos a Gannis</h1>
        <div className='container-mascotas'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      </div>

      <footer className={`text-center py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
        <p>&copy; 2024 Gannis. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
