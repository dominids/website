import React, {useState} from 'react'

function ChangeComponent(){
    const [name, setName] = useState("Guest");
    const [shipping, setShipping] = useState("Delivery");
    const handleNameChange = (event:any) =>{
        setName(event.target.value);
    }

    const handleShipping = (event:any) =>{
        setShipping(event.target.value);
    }

    return (<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <label>
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} 
            onChange={handleShipping}/>
            Pickup
        </label><br/>
        <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} 
            onChange={handleShipping}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>)
}

export default ChangeComponent