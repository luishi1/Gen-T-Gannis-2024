const initialState = {
    loading: false,
    mascotas: [],
    error: ''
};

const mascotaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MASCOTAS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_MASCOTAS_SUCCESS':
            return { loading: false, mascotas: action.payload, error: '' };
        case 'FETCH_MASCOTAS_FAILURE':
            return { loading: false, mascotas: [], error: action.payload };
        case 'DELETE_MASCOTA_SUCCESS':
            return {
                ...state,
                mascotas: state.mascotas.filter(mascota => mascota.id !== action.payload)
            };
        case 'UPDATE_MASCOTA_SUCCESS':
            return {
                ...state,
                mascotas: state.mascotas.map(mascota => 
                    mascota.id === action.payload.id ? action.payload : mascota
                )
            };
        default:
            return state;
    }
};

export default mascotaReducer;
