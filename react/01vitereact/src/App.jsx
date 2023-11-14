import { useState } from "react";
import Card from "./Card";

function App() {
// let value=10;
let [value, setValue]=useState(10)
function addValue(){
  // console.log(value);
  // value++
  if(value<20){
  setValue(preCounter=>preCounter+1)
  setValue(preCounter=>preCounter+1)
  setValue(preCounter=>preCounter+1)
  setValue(preCounter=>preCounter+1)
  setValue(preCounter=>preCounter+1)

  }
}
function minus(){
  if(value>0){
  setValue(value-1)
  }
}

  return (
    <>
   <h1 className="bg-green-400">counter app : {value}</h1>
   <button onClick={addValue}>Add Value</button> <br /> <br />
   <button onClick={minus}>Minus Value</button>
  <p>value {value}</p>
  <h4>{value}</h4>
< Card />

  
  </>
  )
}

export default App
