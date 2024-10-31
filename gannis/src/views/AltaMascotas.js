import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import '../ui/AltaMascotas.css'; 

const AltaMascotas = () => {
    const [formData, setFormData] = useState({
        principal: null,
        nombre: '',
        img: null,
        edad: '',
        tamaño: '',
        peso: '',
        actividad: '',
        vacunado: '',
        especie: '',
        esteril: '',
        sexo: '',
        desparasitado: '',
        especificaciones: '',
        necesidades: '',
        requerimientos: '',
        historia: '',
        politica_priv: false,
    });

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files : type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log(formData);
    };

    return (
        <div className="form-mas" id="regis-mas">
            <form onSubmit={handleSubmit} encType="multipart/form-data" id="mascotas">
                <div className="cabecera">
                <FontAwesomeIcon icon={faPaw} id="r-mas" />
                    <h3 id="reg-m">Registro de mascota</h3>
                    {/* Aquí podrías mostrar el mensaje si existe */}
                </div>
                <div className="text-mas">
                    <div className="alert alert-primary" role="alert">
                        Se informa que todos los campos son obligatorios
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="principal" className="form-label">Foto principal</label>
                            <input
                                type="file"
                                name="principal"
                                id="principal"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        </div>
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
                            <label htmlFor="img" className="form-label">Fotos</label>
                            <input
                                type="file"
                                name="img"
                                id="img"
                                className="form-control"
                                multiple
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
                            <label htmlFor="tamaño" className="form-label">Tamaño</label>
                            <select
                                name="tamaño"
                                className="form-select"
                                required
                                onChange={handleChange}
                            >
                                {['Chico', 'Mediano', 'Grande'].map((tam) => (
                                    <option key={tam} value={tam}>
                                        {tam}
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
                        <div className="col">
                            <label htmlFor="actividad" className="form-label">Nivel de actividad</label>
                            <select
                                name="actividad"
                                className="form-select"
                                required
                                onChange={handleChange}
                            >
                                {['Activo', 'Moderado', 'Sedentario'].map((act) => (
                                    <option key={act} value={act}>
                                        {act}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Aquí siguen los campos para vacunación, especie, etc. */}

                    <div className="textareas">
                        <div className="mb-3">
                            <label htmlFor="especificaciones" className="form-label">Especificaciones</label>
                            <textarea
                                name="especificaciones"
                                placeholder="Detallar sobre el color, extremidades o partes faltantes, enfermedades u otros."
                                className="form-control"
                                rows="3"
                                required
                                value={formData.especificaciones}
                                onChange={handleChange}
                            />
                        </div>
                        {/* Otros campos de texto como necesidades, requerimientos e historia */}
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
