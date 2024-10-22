import React from 'react';


const Car = ({ make, model, year, color, image }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>Car Details</h2>
            <img src={image} alt={`${make} ${model}`} style={{ width: '200px', height: 'auto', marginBottom: '10px' }} />
            <p><strong>Make:</strong> {make}</p>
            <p><strong>Model:</strong> {model}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Color:</strong> {color}</p>
        </div>
    );
};

export default Car;