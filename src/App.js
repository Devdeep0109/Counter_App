import "./App.css";
import react from "react";
import { useState } from "react";
function App() {

  const [val ,setVal] = useState(0);
  
  function handleChange(e){
    if(e.target.id === "bt1"){
      setVal(val+1);
    }
    if(e.target.id === "bt2"){
      setVal(val-1);
    }
    else if(e.target.id === "bt3"){
      setVal(0);
    }
  }
  

  return (
    <div className="main">
      <div className="contain">
      <h1>Counter App</h1>
      <h2>{val}</h2>
      <button id="bt1" onClick={handleChange}>Increment</button>
      <button id="bt2" onClick={handleChange}>Decrement</button>
      <button id ="bt3" onClick={handleChange}>Reset</button>
      </div>
    </div>
  );
}

export default App;
