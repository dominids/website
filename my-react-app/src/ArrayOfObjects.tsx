import { element, number } from "prop-types";
import { useState } from "react";

function ArraysOfObjects(){

    interface Car {
        year: number;
        make: string;
        model: string;
      }
    
    const [cars, setCars] = useState<Car[]>([]);
    const [carYear, setCarYear]= useState(new Date().getFullYear());
    const [carMake, setCarMake]= useState("");
    const [carModel, setCarModel]= useState("");

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(index:any){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event:any){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event:any){
        setCarMake(event.target.value)
    }
    function handleModelChange(event:any){
        setCarModel(event.target.value);
    }

    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} /><br />
        <input type="text" value={carMake} placeholder="Enter car make" onChange={handleMakeChange} /><br />
        <input type="text" value={carModel} placeholder="Enter car model" onChange={handleModelChange} />
        <button onClick={handleAddCar}>Add car</button>

    </div>);
}

export default ArraysOfObjects; 