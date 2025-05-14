import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const addValue = () => {
  


      setCounter(prevCounter => prevCounter+ 1)
      setCounter(prevCounter => prevCounter+ 1)
      setCounter(prevCounter => prevCounter+ 1)
      setCounter(prevCounter => prevCounter+ 1)
      setCounter(prevCounter => prevCounter+ 1)

   
  }
  const removeValue = () => {

    
      setCounter(counter - 1)
    
  }
  return (
    <><h1>Hello Apurv{counter}</h1>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;