import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card'; // Asegúrate de que la ruta sea correcta

const Mascotas = () => {
    const [mascotas, setMascotas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [weightFilter, setWeightFilter] = useState('');

    const fetchMascotas = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/mascotas');
            if (!response.ok) {
                throw new Error('No se puede obtener los datos del server');
            }
            const data = await response.json();
            setMascotas(data);
        } catch (error) {
            console.log("Algo falló al cargar las mascotas");
        }
    };

    useEffect(() => {
        fetchMascotas();
    }, []);

    const filteredMascotas = mascotas.filter(mascota => {
        const matchesName = mascota.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAge = ageFilter ? mascota.edad === parseInt(ageFilter) : true;
        const matchesSize = sizeFilter ? mascota.tamano.toLowerCase().includes(sizeFilter.toLowerCase()) : true; // Coincidencia parcial
        const matchesWeight = weightFilter ? String(mascota.peso).includes(weightFilter) : true; // Coincidencia parcial

        return matchesName && matchesAge && matchesSize && matchesWeight;
    });

    return (
        <div className="container mascotas-container">
            <h1 className="my-4">Mascotas en adopción</h1>
            <div className="filters mb-4">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Edad"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                />
                <select
                    className="form-control mb-2"
                    value={sizeFilter}
                    onChange={(e) => setSizeFilter(e.target.value)}
                >
                    <option value="">Seleccionar tamaño</option>
                    <option value="chico">Chico</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
                <input
                    type="text" // Cambiado a texto para permitir coincidencias parciales
                    className="form-control mb-2"
                    placeholder="Peso"
                    value={weightFilter}
                    onChange={(e) => setWeightFilter(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredMascotas.map(m => (
                    <div className="col-md-4 mb-4" key={m.id}>
                        <Card 
                            title={m.nombre} 
                            text={m.especificaciones} 
                            age={m.edad} 
                            size={m.tamano} 
                            weight={m.peso} 
                            imageUrl="url_de_imagen_gato_1" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mascotas;
