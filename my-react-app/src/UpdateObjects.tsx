import { useState } from "react";

function UpdateObjects(){

    const [car, setCar]= useState({year: 2024, make: "Ford", model: "Mustang "});

    function handleYearChange(event:any){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event:any){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event:any){
        setCar(c => ({...c, model: event.target.value}))
    }
    return(<div>
        <p>Your fav car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange} /><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>)
}

export default UpdateObjects; 