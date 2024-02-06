import { useState } from "react";
import { Rectangle } from "./components/rectangle";
import { Square } from "./components/square";

function App() {
  const [counters, setCounters] = useState({v1:0,v2:0});
  const clickHandler = (e) => {
    switch(e.target.name){
      case "rect":
        setCounters((prev)=>({...prev, v1: prev.v1+1}));
        break;
      case "sqr":
        setCounters((prev)=>({...prev, v2: prev.v2+1}))
        break;
      default: 
        e.preventDefault()
    }
    
  }
  return (
    <div className="parent" onClick={clickHandler}>
      <p>This is Parent</p>
      <button name="rect">Update Rectangle</button>
      <button name="sqr">Update Square</button>
      <Rectangle rectCount={counters.v1}/>
      <Square sqCount={counters.v2}/>
    </div>
  );
}

export default App;
