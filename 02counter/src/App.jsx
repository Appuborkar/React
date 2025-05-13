import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    if (counter <= 19) {


      setCounter(counter + 1)
    }
    else {
      alert("you cannot add the number greater than 20")
    }
  }
  const removeValue = () => {

    if (counter >= 1) {
      setCounter(counter - 1)
    } else {
      alert("you cannot remove the number less than 0")
    }
  }
  return (
    <><h1>Hello Apurv{counter}</h1>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;