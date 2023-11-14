import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
console.log(color);
console.log(setColor);
return (
    <div style={{background:color,height:"100vh"}} >
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    onClick={()=>{setColor("green")}}
    >
        Green
      </button>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      onClick={()=>setColor("red")}
      >
        Red
      </button>
      <button
        type="button"
        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        onClick={()=>setColor("yellow")}
          >
        Yellow
      </button>
      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={()=>setColor("purple")}
            >
        Purple
      </button>
      <button
        type="button"
        className="text-white bg-orange-600	 hover:bg-orange-600	 focus:outline-none focus:ring-4 focus:bg-orange-600	 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2  ml-2 dark:bg-orange-600	 dark:hover:bg-orange-600	 dark:focus:bg-orange-600	"
        onClick={()=>setColor("orange")}
          >
        orange
      </button>
    </div>
  );
}

export default App;
