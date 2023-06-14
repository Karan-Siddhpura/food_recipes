import React from 'react';
import "./Card.css";

function Card({ image, label, url }) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={image} alt="image" onClick={() => {
                    window.open(url);
                }} />
            </div>
            <div className="card__name">
                <h3>{label}</h3>
            </div>
        </div>

    )
}

export default Card;
