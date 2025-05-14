import { useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)
  let obj={
    name:"Apurv",
    age:13
  }

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-3xl text-yellow-100 mb-4'>Hello Apurv</h1>
    <Card myobj={obj}/>
   
    </>
  )
}

export default App
