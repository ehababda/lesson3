import { useState } from "react";
export default function StringA() {
    const [ch, setA] = useState("a");
    
    function Add(){
    setA(ch + 'a');
}
    function Sub() {
        setA(ch.slice(0,-1));
    }
    return (
        <div>
            <h1> string</h1>
            <button onClick={Add}> add a</button>
            <button onClick={Sub}> sub a</button>
            <p> {ch}</p>
        </div>
    )
}