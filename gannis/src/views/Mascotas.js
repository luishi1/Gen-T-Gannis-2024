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
                throw new Error('No se puede obtener los datos del servidor');
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
        const matchesAge = ageFilter ? mascota.edad === ageFilter : true; // Cambiado para comparar correctamente
        const matchesSize = sizeFilter ? mascota.tamano.toLowerCase().includes(sizeFilter.toLowerCase()) : true;
        const matchesWeight = weightFilter ? String(mascota.peso).includes(weightFilter) : true;

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
                <select
                    className="form-control mb-2"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                >
                    <option value="">Seleccionar edad</option>
                    {['1 semana', '2 semanas', '3 semanas', '1 mes', '2 meses', '3 meses', '4 meses', '5 meses', '6 meses', '7 meses', '8 meses', '9 meses', '10 meses', '11 meses', '1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '12 años', '13 años', '14 años', '15 años', '16 años', '17 años', '18 años', '19 años', '20 años'].map((edad) => (
                        <option key={edad} value={edad}>
                            {edad}
                        </option>
                    ))}
                </select>
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
                    type="text"
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
                            imageUrl={m.img} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mascotas;
