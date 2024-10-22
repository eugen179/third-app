import mazdaImage from './Images/mazda.jpg';
import toyotaImage from './Images/camry.jpg';
import hondaImage from './Images/honda.jpg';
import fordImage from './Images/ford.jpg';
import rav4Image from './Images/rav4.jpg'; 
import harrierImage from './Images/harrier.jpg'; 
import gleImage from './Images/gle.jpg'; 
import './App.css'; 
import Car from './Components/Car';

const App = () => {
    const carData = [
        {
            make: "Honda",
            model: "Civic",
            year: "2020",
            color: "Black",
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
        },
        {
            make: "Toyota",
            model: "RAV4",
            year: "2022",
            color: "Gray",
            image: rav4Image
        },
        {
            make: "Toyota",
            model: "Harrier",
            year: "2021",
            color: "Black",
            image: harrierImage
        },
        {
            make: "Mercedes-Benz",
            model: "GLE",
            year: "2020",
            color: "White",
            image: gleImage
        },
        {
            make: "Honda",
            model: "CR-V",
            year: "2021",
            color: "Black",
            image: hondaImage 
        },
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
