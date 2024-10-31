import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';
import Breadcrumbs from './BreadCrumbs';

const Navbar = ({ darkMode, toggleDarkMode, view }) => {
    const location = useLocation(); // Obtén la ubicación actual
    console.log("location: " + location.pathname);

    return (
        <><nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="http://mrwgifs.com/wp-content/uploads/2014/02/Ditto-Dance-Rave-All-Over-The-Place-In-Pokemon-Gif.gif" target="_blank">
                    <img src="logo.png" alt="" width="230" height="50" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`} to="/">
                                <i className="fa-solid fa-house-chimney"></i> Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/forms' ? 'nav-link-active' : ''}`} to="/forms">
                                <i className="fa-solid fa-circle-info"></i> Formularios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/forms' ? 'nav-link-active' : ''}`} to="/mascotas">
                                <i className="fa-solid fa-circle-info"></i> Mascotas
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link className="btn btn-primary me-md-2" to="/login">Iniciar sesión</Link>
                        <Link className="btn btn-primary me-md-2" to="/register">Registrarse</Link>
                        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div>
            </div>
        </nav>
        <div>
            {location.pathname != "/" && <Breadcrumbs></Breadcrumbs>}
        </div></>
        
        
    );
};

export default Navbar;
