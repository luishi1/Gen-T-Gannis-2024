import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import '../ui/Forms.css';
import Breadcrumbs from '../components/BreadCrumbs';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        tamano: '',
        peso: '',
        nivel_de_actividad: '',
        especificaciones: '',
    });

    const handleRegister = (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        navigate('/register'); 
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message); 
                setFormData({
                    nombre: '',
                    edad: '',
                    tamano: '',
                    peso: '',
                    nivel_de_actividad: '',
                    especificaciones: '',
                });
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="container container-ini">
            <h5 className="titleini">¡Bienvenido de vuelta!</h5>
            <form action="comprobar_inicio.php" method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text in-se" id="basic-addon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input name="mail" type="text" className="form-control" placeholder="Correo electrónico" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text in-se" id="basic-addon1">
                        <FontAwesomeIcon icon={faKey} />
                    </span>
                    <input name="contrasena" type="password" className="form-control" placeholder="Contraseña" />
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" name="recordar" value="SI" /> Recuerdame
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
            </form>
            <div className="footerini">
                ¿No tienes cuenta?
                <a href="#" onClick={handleRegister}> Regístrate</a>
            </div>
        </div>
    );
};

export default Login;
