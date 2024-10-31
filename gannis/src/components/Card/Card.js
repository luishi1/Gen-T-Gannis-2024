import React from 'react';
import './Card.css'; 

const Card = ({ id, nombre, sexo, edad }) => {

  return (
    <a href={`/mascotadetalle?id=${id}`}>
      <div className="card card-min">
        <img 
          className="card_image" 
          height="220px" 
          src="errorImg.png"
          alt={nombre} 
        />
        <p className="card_name">{nombre}</p>
        <div className="grid-container">
          <div className="about about1">{sexo}</div>
          <div className="about">{edad}</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
