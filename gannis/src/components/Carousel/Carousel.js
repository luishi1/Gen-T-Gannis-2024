import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import './Carousel.css'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mascotas, setMascotas] = useState([]);

    const fetchMascotas = async () => {
        console.log("Entró al método de fetch mascotas");
        try {
            const response = await fetch('http://localhost:8081/api/mascotas');

            if (!response.ok) {
                throw new Error('No se puede obtener los datos del server');
            }
            const data = await response.json();
            setMascotas(data);
            console.log(data);
        } catch (error) {
            console.log("Algo falló al cargar a los animalitos");
        }
    }

    useEffect(() => {
        fetchMascotas();
    }, []);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % mascotas.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + mascotas.length) % mascotas.length);
    };

    const renderedCards = mascotas.slice(activeIndex, activeIndex + 3).map((m) => (
        <Card 
            key={m.id} 
            title={m.nombre} 
            age={m.edad} 
            size={m.tamano} 
            weight={m.peso} 
            imageUrl={m.img}
        />
    ));

    return (
        <div className="container">
            <div className="carousel container">
                <div className="titulocarrusel">
                    <h3>Mascotas en adopción</h3>
                </div>
                <button onClick={prevSlide} disabled={activeIndex === 0} className="carousel__anterior">
                    ⬅
                </button>
                <div className="carousel__lista">
                    {renderedCards}
                </div>
                <button onClick={nextSlide} disabled={activeIndex === mascotas.length - 3} className="carousel__siguiente3">
                    ➡
                </button>
            </div>
        </div>   
    );
}

export default Carousel;
