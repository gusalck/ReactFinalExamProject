import React from 'react';

function Card({ title, people, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
            <p>{people}</p>
        </div>
    );
}

export default Card;