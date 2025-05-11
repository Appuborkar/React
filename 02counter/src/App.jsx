import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  let counter=5;
  const addValue=()=>{
  counter=+1;
  console.log("value added",counter);
}

  return (    
    <>
 
<h1>Chai aur react</h1>
<h2>Counter Value:{counter}</h2>
<button onClick={addValue}>add value</button><br></br>
<button>remove value</button>
    </>
  )
}

export default App
