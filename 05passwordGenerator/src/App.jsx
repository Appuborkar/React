import { useCallback, useEffect, useRef, useState } from 'react';


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%&*!_-+=[]{}~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copypasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white py-2 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly 
            ref={passwordRef}/>
          <button className='outline-none bg-blue-800 text-white py-2 px-2 shrink-0 ' onClick={copypasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} /><label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setnumberAllowed((prev) => !prev); }} />
          <label htmlFor="number">Number</label></div>
           <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => { setcharAllowed((prev) => !prev); }} />
          <label htmlFor="characterInput">Characters</label></div>
        </div>
      </div>
    </>
  )
}
export default App
