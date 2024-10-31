import React from 'react';
import { useState, useEffect } from 'react';
import '../ui/MascotaDetalle.css';

const MascotaDetalle = () => {
    
  const mascotas = [
    {
      id: 1,
      nombre: 'Miau soy un gato',
      animal: 'Gato',
      edad: '2 años',
      sexo: 'Macho',
      tamano: 'Mediano',
      peso: 5,
      nivel_de_actividad: 'Alto',
      vacunado: 'Sí',
      esterilizado: 'Sí',
      desparasitado: 'Sí',
      necesidades: 'Necesita atención y juegos diarios.',
      especificaciones: 'Es un gato muy cariñoso.',
      historia: 'Rescatado de la calle.',
      requisitos: 'Amor y un hogar acogedor.',
    },
  ];
  
  const rutas = [
    'principal.jpg',
    'recortada-1.jpg',
    'recortada-2.jpg',
    'recortada-3.jpg',
  ];

  return (
    <div className="container">
      {mascotas.map((mascota, index) => {
        const isGato = mascota.animal === "Gato";
        const isPerro = mascota.animal === "Perro";
        
        return (
          <div key={index}>
            
            <div className="top">
              <p className="drh2">{mascota.nombre}</p>
              
            </div>

            {rutas && (
              <div className={rutas.length >= 4 ? "carousel" : "imgsdm"}>
                {rutas.map((ruta, i) => {
                  const imgSrc = i === 0 ? "principal.jpg" : `recortada-${i + 1}.jpg`;
                  return (
                    <a key={i} className="aimg" data-bs-toggle="modal" data-bs-target={`#modalimg${i + 1}`}>
                      <img className={rutas.length >= 4 ? "imgscar" : "imgscar2"} src={`img/mascotas/${mascota.id}/${imgSrc}`} height={rutas.length >= 4 ? undefined : '400px'} />
                    </a>
                  );
                })}
              </div>
            )}

            <div className="row align-items-center">
              <div className="col col-dm">
                <h2>Mis datos:</h2>
                <ul className="listado">
                  <li>Edad: {mascota.edad}</li>
                  <li>Sexo: {mascota.sexo}</li>
                  <li>Tamaño: {mascota.tamano}</li>
                  <li>Peso: {mascota.peso}kg</li>
                  <li>Nivel de actividad: {mascota.nivel_de_actividad}</li>
                </ul>
              </div>
              <div className="col col-dm">
                <h2>Estado:</h2>
                <ul className="listado">
                  <li>Vacunado: {mascota.vacunado}</li>
                  <li>Esterilizado: {mascota.esterilizado}</li>
                  <li>Desparasitado: {mascota.desparasitado}</li>
                </ul>
              </div>
              <div className="col col-dm">
                <h2>Necesidades:</h2>
                <p>{mascota.necesidades}</p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col col-dm">
                <h2>Especificaciones:</h2>
                <p>{mascota.especificaciones}</p>
              </div>
              <div className="col col-dm">
                <h2>Historia:</h2>
                <p>{mascota.historia}</p>
              </div>
              <div className="col col-dm">
                <h2>Requisitos:</h2>
                <p>{mascota.requisitos}</p>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default MascotaDetalle;
