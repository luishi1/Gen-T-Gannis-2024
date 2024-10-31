import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import './Forms.css';

const Login = () => {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        navigate('/register'); 
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
