import React from 'react';
import './Card.css'; 

const Card = ({ title, age, size, weight, imageUrl }) => {
  return (
      <div className="card card-min">
        <img 
          className="card_image" 
          height="220px" 
          src={imageUrl} 
          onError={(e) => { e.target.src = "img/errorImg.png"; }} // Fallback para la imagen
          alt={title} 
        />
        <p className="card_name">{title}</p>
        <p className="card_age">Edad: {age} años</p>
        <p className="card_size">Tamaño: {size}</p>
        <p className="card_weight">Peso: {weight} kg</p>
      </div>
  );
};

export default Card;
