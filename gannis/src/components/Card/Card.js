import React from 'react';
import './Card.css'; 

const Card = ({ title, text, imageUrl }) => {
  return (
    <a href="/mascotadetalle">
      <div className="card card-min">
        <img 
          className="card_image" 
          height="220px" 
          src={imageUrl} 
          onError={(e) => { e.target.src = "img/errorImg.png"; }} // Fallback para la imagen
          alt={title} 
        />
        <p className="card_name">{title}</p>
        <div className="grid-container">
          <div className="about">{text}</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
