import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Count from './Compenent/Count';
function App() {
  const [count,setCount] = useState(0);
  function inc() {
    setCount(count+1);
   // alert(count);
  }
  function inc2(num) {
    setCount(count +num);
    //alert(count);
  }
  return (
    <div className="App">
      {/* <button onClick={inc}> click me</button>
      <button onClick={()=>inc2(2)}> click me 2</button>
      <p>{count}</p> */}
      <Count></Count>
    </div>
    
   
  );
}

export default App;
