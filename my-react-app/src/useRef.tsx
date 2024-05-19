import { useState, useEffect, useRef } from "react";

function UseRef(){
    
    //uzywanie useRef nie powoduje rerenderowania się komponentu 
    //Accessing/Interacting with DOM elements
    //Handling Focus, Animations, and Transitions
    //Managing Timers and Intervals
    const inputRef = useRef(null);

    

    useEffect(() =>{
        console.log("RENDERED");
        console.log(inputRef);
    }

    )

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow";
    }

    return (
        <><div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input type="text" ref={inputRef}/>
        </div></>
    )
}

export default UseRef