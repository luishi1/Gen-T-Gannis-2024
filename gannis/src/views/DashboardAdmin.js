// src/components/DashboardAdmin.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMascotas, deleteMascota } from '../redux/actions/mascotaActions';
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mascotas, loading, error } = useSelector(state => state.mascotas);

    useEffect(() => {
        dispatch(fetchMascotas());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta mascota?")) {
            dispatch(deleteMascota(id));
        }
    };

    const handleEdit = (mascota) => {
        navigate('/editar-mascota', { state: { mascota } });
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mt-5">
            <h1>Dashboard Admin</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Tamaño</th>
                        <th>Peso</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {mascotas.map(mascota => (
                        <tr key={mascota.id}>
                            <td>{mascota.id}</td>
                            <td>{mascota.nombre}</td>
                            <td>{mascota.edad}</td>
                            <td>{mascota.tamano}</td>
                            <td>{mascota.peso}</td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => handleEdit(mascota)}>Editar</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(mascota.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardAdmin;