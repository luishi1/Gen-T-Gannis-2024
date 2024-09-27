import React from 'react';
import styles from "./Card.css"

function Card() {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img src="url_de_imagen_gato" className="card-img-top" alt="Gato" />
            <div className="card-body">
                <h5 className="card-title">Silvestre</h5>
                <p className="card-text">Macho / 3 meses</p>
            </div>
        </div>
    );
};

export default Card;