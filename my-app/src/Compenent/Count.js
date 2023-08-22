import { useState } from "react";
import "./Count.css";
export default function Count() {
    const [count, setCount] = useState(0);
function inc() {
    setCount(count + 100);
}
function dec() {
    setCount(count - 100);
}
    return (
        <div className="counterContainer">
            <h1>Counter</h1>
            <button className="btn" onClick={inc}>+100 </button>
            <button onClick={dec}>-100 </button>
            <p className="txt">{count}</p>
            </div>
    )
}
