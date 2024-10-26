// src/views/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register'); 
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="login-container text-center">
                <h1 className="text-warning mb-4">¡Bienvenido de vuelta!</h1>
                <div className="card p-4">
                    <form>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            <input type="email" className="form-control" placeholder="Correo electrónico" required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                            <input type="password" className="form-control" placeholder="Contraseña" required />
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Recuérdame</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                </div>
                <div className="card p-3 mt-3">
                    <p>¿No tienes cuenta? <button onClick={handleRegister} className="btn btn-link">Regístrate</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
