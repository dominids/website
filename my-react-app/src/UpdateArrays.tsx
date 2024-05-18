import { element } from "prop-types";
import { useState } from "react";

function UpdateArrays(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood:string = (document.getElementById("foodInput") as HTMLInputElement).value;
        (document.getElementById("foodInput") as HTMLInputElement).value="";

        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index:number){
        setFoods(foods.filter((_, i) => i !==index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default UpdateArrays; 