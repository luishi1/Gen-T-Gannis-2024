import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import '../ui/Forms.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.users.error);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(mail, password));
            console.log("loginError: " + loginError);
            navigate('/');
        } catch(error){

        }
    };

    const handleRegister = (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        Navigate('/register'); 
    };

    return (
        <div className="container container-ini">
            <h5 className="titleini">¡Bienvenido de vuelta!</h5>
            <form onSubmit={handleSubmit} action="comprobar_inicio.php" method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text in-se" id="basic-addon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input name="mail" value={mail} onChange={(e) => setMail(e.target.value)} type="text" className="form-control" placeholder="Correo electrónico" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text in-se" id="basic-addon1">
                        <FontAwesomeIcon icon={faKey} />
                    </span>
                    <input name="contrasena" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Contraseña" />
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
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
    );
};

export default Login;
