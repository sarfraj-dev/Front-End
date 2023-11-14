import React from 'react'
import { useState, useCallback , useEffect, useRef} from 'react'
// import './index.css'
function App() {
  const [length, setlength]=useState(8)
  const [number, setnumber]=useState(false)
  const [character, setcharacter]=useState(false)
  const [Password, setpassword]=useState("")
const passwordRef=useRef(null)

  const passwordGenrator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str+="0123456789"
    }
    if (character) {
      str+="!@#$%^&*_/|.,"
    }
    for (let i = 1; i <= length; i++) {
     let char=Math.floor(Math.random()*str.length+1)
     pass +=str.charAt(char) 
    }
    setpassword(pass)
  },[length,number, character, setpassword])
const copyPass=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(Password)
},[Password])

  // passwordGenrator()
  useEffect(()=>{passwordGenrator()},[length,number, character,passwordGenrator])
  return (

<>
<div className='text-orange-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-center my-3'>
  <h1>Password Generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4 pb-5'>
  <input type="text" value={Password}  className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
  <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0' onClick={copyPass}>copy</button>

</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
<label> length: {length}</label>
</div>
<div className="flex items-center gap-x-1">
  <input type="checkbox" name="" id="numberInput" defaultChecked={number} onChange={()=>{setnumber((prev)=>!prev)}} />
  <label htmlFor="">Numbers</label>
</div>
<div className="flex items-center gap-x-1">
  <input type="checkbox" name="" id="character" defaultChecked={character} onChange={()=>{setcharacter((prev)=>!prev)}} />
  <label htmlFor="">character</label>
</div>
</div>
</div>

</>
  )
}

export default App
