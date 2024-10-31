// src/redux/actions/mascotaActions.js
import axios from 'axios';

export const fetchMascotas = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_MASCOTAS_REQUEST' });
        try {
            const response = await axios.get('http://localhost:8081/api/mascotas');
            dispatch({ type: 'FETCH_MASCOTAS_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_MASCOTAS_FAILURE', payload: error.message });
        }
    };
};

export const deleteMascota = (id) => {
    return async (dispatch) => {
        console.log("ID a eliminar:", id); // Depuración
        try {
            await axios.delete(`http://localhost:8081/api/mascotas/${id}`);
            dispatch({ type: 'DELETE_MASCOTA_SUCCESS', payload: id });
        } catch (error) {
            console.error('Error deleting mascota:', error.message);
            alert(`Error al eliminar la mascota: ${error.response?.data || 'Error desconocido'}`);
        }
    };
};

export const updateMascota = (mascota) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`http://localhost:8081/api/mascotas/${mascota.id}`, mascota);
            dispatch({ type: 'UPDATE_MASCOTA_SUCCESS', payload: response.data });
        } catch (error) {
            console.error('Error updating mascota:', error);
        }
    };
};
