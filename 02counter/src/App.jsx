import { useState } from 'react';
import './App.css';

function App() {
 let [counter,setCounter] =useState(5)
  // let counter = 5;
  const addValue = () => {
    // counter = counter+1;
    if(counter<=19){
    setCounter(counter+1)}
    else{
      alert("cannot add the number greater than 20")
    }
  } 
  const removeValue=()=>{
    // counter=counter-1
    if(counter>=1){
    setCounter(counter-1)
  }
  else{
    alert("cannot delete the number less than 0")
  }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>add value</button><br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
