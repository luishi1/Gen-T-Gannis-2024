import React from 'react';
import './Card.css'; 

function Card({ title, text, imageUrl }) {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
}

export default Card;
