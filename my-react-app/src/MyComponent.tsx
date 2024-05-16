import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age,setAge]=useState(0);
    const [isEmployed, setIsEmployed]=useState(false);
    //when you update var with useState() it triggers component do rerender
    const updateName = () => {
        setName("Dominik");
    };
    const incrementAge = () => {
        setAge(age+1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>increment Age</button>

        <p>is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>toggle</button>
    </div>);
}

export default MyComponent