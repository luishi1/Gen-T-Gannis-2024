import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import '../ui/AltaMascotas.css';
import { useNavigate } from 'react-router-dom';


const AltaMascotas = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        edad: '',
        tamano: '',
        peso: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataObj = new FormData();
        formDataObj.append('nombre', formData.nombre);
        formDataObj.append('edad', formData.edad);
        formDataObj.append('tamano', formData.tamano);
        formDataObj.append('peso', formData.peso);
        formDataObj.append('img', formData.img); 
    
        try {
            const response = await fetch('http://localhost:8081/api/mascotas', {
                method: 'POST',
                body: formDataObj,
            });
    
            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                setFormData({ nombre: '', edad: '', tamano: '', peso: '', img: null });
                navigate('/'); 
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };


    return (
        <div className="form-mas" id="regis-mas">
            <form onSubmit={handleSubmit} encType="multipart/form-data" id="mascotas">
                <div className="cabecera">
                    <FontAwesomeIcon icon={faPaw} id="r-mas" />
                    <h3 id="reg-m">Registro de mascota</h3>
                </div>
                <div className="text-mas">
                    <div className="alert alert-primary" role="alert">
                        Se informa que todos los campos son obligatorios
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="img" className="form-label">Foto</label>
                            <input
                                type="file"
                                name="img"
                                id="img"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="edad" className="form-label">Edad</label>
                            <select
                                name="edad"
                                className="form-select"
                                required
                                onChange={handleChange}
                            >
                                {/* Aquí se pueden mapear las edades */}
                                {['1 semana', '2 semana', '3 semana', '1 mes', '2 meses', '3 meses', '4 meses', '5 meses', '6 meses', '7 meses', '8 meses', '9 meses', '10 meses', '11 meses', '1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '12 años', '13 años', '14 años', '15 años', '16 años', '17 años', '18 años', '19 años', '20 años'].map((edad) => (
                                    <option key={edad} value={edad}>
                                        {edad}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="tamano" className="form-label">Tamaño</label>
                            <select
                                name="tamano"
                                className="form-select"
                                required
                                onChange={handleChange}
                            >
                                {['Chico', 'Mediano', 'Grande'].map((tamano) => (
                                    <option key={tamano} value={tamano}>
                                        {tamano}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="peso" className="form-label">Peso</label>
                            <input
                                type="number"
                                name="peso"
                                value={formData.peso}
                                min="0"
                                max="85"
                                step="0.1"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        
                    </div>

                </div>

                <input
                    type="checkbox"
                    name="politica_priv"
                    id="politica_priv"
                    required
                    checked={formData.politica_priv}
                    onChange={handleChange}
                />
                <label htmlFor="politica_priv">
                    He leído y acepto la <a href="politica_privacidad.php" className="poli" target="_blank" rel="noopener noreferrer">política de privacidad</a>
                </label>
                <div className="boton">
                    <input type="submit" className="btn btn-secondary" id="res-mas" value="Enviar" />
                </div>
            </form>
        </div>
    );
};

export default AltaMascotas;