import React from 'react';
import Car from './Components/Car';
import mazdaImage from './Images/mazda.jpg';
import toyotaImage from './Images/camry.jpg';
import hondaImage from './Images/honda.jpg';
import fordImage from './Images/ford.jpg';
import './App.css'; // Make sure to import your CSS file

const App = () => {
    const carData = [
        {
            make: "Mazda",
            model: "CX-5",
            year: "2022",
            color: "Red",
            image: mazdaImage 
        },
        {
            make: "Toyota",
            model: "Camry",
            year: "2021",
            color: "Blue",
            image: toyotaImage 
        },
        {
            make: "Honda",
            model: "Civic",
            year: "2020",
            color: "Black",
            image: hondaImage 
        },
        {
            make: "Ford",
            model: "Mustang",
            year: "2019",
            color: "Yellow",
            image: fordImage 
        }
    ];

    return (
        <div>
            <h1>Car Information</h1>
            <div className="car-container">
                {carData.map((car, index) => (
                    <div className="car" key={index}>
                        <Car
                            make={car.make} 
                            model={car.model} 
                            year={car.year} 
                            color={car.color} 
                            image={car.image} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;