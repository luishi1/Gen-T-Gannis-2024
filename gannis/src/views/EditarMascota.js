// src/views/EditarMascota.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { updateMascota } from '../redux/actions/mascotaActions';
import '../ui/AltaMascotas.css'; // Asegúrate de importar tu CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const EditarMascota = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mascota } = location.state || {}; // Asegúrate de que 'mascota' esté en el estado
    const [formData, setFormData] = useState({ ...mascota });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!mascota) {
            setError('No se pudo cargar la mascota.');
            setLoading(false);
        } else {
            setFormData({ ...mascota });
            setLoading(false);
        }
    }, [mascota]);

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
        formDataObj.append('id', mascota.id); // Asegúrate de agregar el ID
        formDataObj.append('nombre', formData.nombre);
        formDataObj.append('edad', formData.edad);
        formDataObj.append('tamano', formData.tamano);
        formDataObj.append('peso', formData.peso);
        if (formData.img) {
            formDataObj.append('img', formData.img);
        }

        try {
            await dispatch(updateMascota(formDataObj));
            navigate('/dashboard-admin');
        } catch (error) {
            setError('Error al actualizar la mascota.');
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="form-mas" id="regis-mas">
            <div className="cabecera">
                <FontAwesomeIcon icon={faPaw} id="r-mas" />
                <h3 id="reg-m">Editar Mascota</h3>
            </div>
            <Form onSubmit={handleSubmit} encType="multipart/form-data" id="mascotas">
                <div className="alert alert-primary" role="alert">
                    Se informa que todos los campos son obligatorios
                </div>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formEdad">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="edad" 
                        value={formData.edad} 
                        onChange={handleChange} 
                        required
                    >
                        {['1 semana', '2 semanas', '3 semanas', '1 mes', '2 meses', '3 meses', '4 meses', '5 meses', '6 meses', '7 meses', '8 meses', '9 meses', '10 meses', '11 meses', '1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '12 años', '13 años', '14 años', '15 años', '16 años', '17 años', '18 años', '19 años', '20 años'].map((edad) => (
                            <option key={edad} value={edad}>
                                {edad}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formTamano">
                    <Form.Label>Tamaño</Form.Label>
                    <Form.Control 
                        as="select" 
                        name="tamano" 
                        value={formData.tamano} 
                        onChange={handleChange} 
                        required
                    >
                        {['Chico', 'Mediano', 'Grande'].map((tamano) => (
                            <option key={tamano} value={tamano}>
                                {tamano}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formPeso">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="peso" 
                        value={formData.peso} 
                        min="0" 
                        max="85" 
                        step="0.1" 
                        required 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formImg">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control 
                        type="file" 
                        name="img" 
                        accept="image/png, image/jpeg, image/jpg, image/gif" 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Actualizar
                </Button>
            </Form>
        </div>
    );
};

export default EditarMascota;
