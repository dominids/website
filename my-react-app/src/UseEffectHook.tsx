import { useState,useEffect } from "react";

function UseEffectHook(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    //useEffect(function, [dependencies]);
    // 1. useEffect(() => {}) // Runs after every re-render
    //2. useEffect(() => {},[]) // Runs only on mount
    // 3. useEffect(() => {}, [value]) // Runs on mount + when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () =>{
            //SOME CLEANUP CODE
        }
    }, [count]);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
    }, [])
    function addCount(){
        setCount(c => c + 1);
    }
    function changeColor(){
        setColor(c => c ==="green" ? "red" : "green");
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button><br />
        <button onClick={changeColor}> Change color </button>

        <p>Window width: {width}px height {height}px</p>

    </>)
}

export default UseEffectHook;