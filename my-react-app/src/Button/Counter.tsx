import React, {useState} from 'react'

function Counter(){
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
        //wywoła się trzy razy 
        //Allows for safe updates based on the previous state
        //USed with multiple state updates and synchronous functions
        //Good practice to use updater
        // count = c
    }
    const decrement = () => {
        setCount(count-1);
        setCount(count-1);
        setCount(count-1);
        //wywoła się tylko raz (buffer)
    }
    const reset = () => {
        setCount(0); 
    }

    return (<div className="counter-container">
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={decrement}>decrement</button>
        <button className="counter-button" onClick={reset}>reset</button>
        <button className="counter-button" onClick={increment}>increment</button>
    </div>)
}

export default Counter