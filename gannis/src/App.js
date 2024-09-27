import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import DarkModeToggle from './components/DarkModeToggle';

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
        <div className="row">
          <div className="col-md-6">
            <h2>Perros</h2>
            <div className="d-flex flex-wrap">
              <div className="card m-2" style={{ width: '18rem' }}>
                <img src="url_de_imagen_perro" className="card-img-top" alt="Perro" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Perro</h5>
                  <p className="card-text">Descripción del perro.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Gatos</h2>
            <div className="d-flex flex-wrap">
              <div className="card m-2" style={{ width: '18rem' }}>
                <img src="url_de_imagen_gato" className="card-img-top" alt="Gato" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Gato</h5>
                  <p className="card-text">Descripción del gato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={`text-center py-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
        <p>&copy; 2024 Gannis. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
