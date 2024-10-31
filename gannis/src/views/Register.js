import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import './Forms.css';

const Register = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); 
    };

    return (
        <div className="container container-ini">
            <h5 className="titleini">¡Regístrate!</h5>
            <form action="comprobar_registro.php" method="POST">
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
                <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
            </form>
            <div className="footerini">
                ¿Ya tienes cuenta?
                <a href="#" onClick={handleLogin} role="button"> Iniciar sesión</a>
            </div>
        </div>
    );
};

export default Register;
