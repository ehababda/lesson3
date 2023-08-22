import { useState } from "react";
export default function Count() {
    const [count, setCount] = useState(0);
function inc() {
    setCount(count + 100);
}
function dec() {
    setCount(count - 100);
}
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={inc}>+100 </button>
            <button onClick={dec}>-100 </button>
            <p>{count}</p>
            </div>
    )
}
