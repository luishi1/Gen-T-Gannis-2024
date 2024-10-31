// src/views/EditarMascota.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { updateMascota } from '../redux/actions/mascotaActions';
import axios from 'axios'; // Asegúrate de importar axios si lo necesitas

const EditarMascota = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mascota } = location.state; // Asegúrate de que 'mascota' esté en el estado
    const [formData, setFormData] = useState({ ...mascota });
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Verifica si 'mascota' está presente
        if (!mascota) {
            setError('No se pudo cargar la mascota.');
            setLoading(false);
        } else {
            setFormData({ ...mascota });
            setLoading(false); // Carga completa
        }
    }, [mascota]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateMascota(formData)); // Asegúrate de que 'updateMascota' maneje la promesa
            navigate('/dashboard'); // Redirigir después de la actualización
        } catch (error) {
            setError('Error al actualizar la mascota.'); // Manejo de errores
        }
    };

    if (loading) return <div>Cargando...</div>; // Muestra un cargando mientras obtienes los datos
    if (error) return <div>{error}</div>; // Muestra el error si hay uno

    return (
        <div className="container mt-4">
            <h1>Editar Mascota</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formEdad">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="edad" 
                        value={formData.edad} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formTamano">
                    <Form.Label>Tamaño</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="tamano" 
                        value={formData.tamano} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formPeso">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="peso" 
                        value={formData.peso} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </Form>
        </div>
    );
};

export default EditarMascota;
