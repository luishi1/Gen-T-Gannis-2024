import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import '../ui/Forms.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';

const Register = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const registerError = useSelector(state => state.users.error);
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/login'); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("mail: " + mail + ", password: " + password);
            await dispatch(register(mail, password));       
            navigate('/'); // Navigate to home or login page after successful registration
        } catch (error) {

        }
    };

    return (
        <div className="container container-ini">
            <h5 className="titleini">¡Regístrate!</h5>
            <form onSubmit={handleSubmit}>
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
                <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
            </form>
            <div className="footerini">
                ¿Ya tienes cuenta?
                <a href="#" onClick={handleLogin} role="button"> Iniciar sesión</a>
            </div>
            {registerError && <p style={{ color: 'red' }}>{registerError}</p>} {/* Display the error message */}
        </div>
    );
};

export default Register;
