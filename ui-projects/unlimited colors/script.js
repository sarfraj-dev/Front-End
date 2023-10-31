const start=document.querySelector("#start")
const body=document.querySelector('body')

const stop=document.querySelector("#stop")

const randomColors=()=>{
    const values="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
      color +=  values[Math.floor(Math.random()*16)]
    }
return color
}

const changeBgColor=()=>{
    body.style.background=randomColors()
}
let setInt
console.log(setInt);

const changingColor=()=>{
    setInt =setInterval(changeBgColor,1000);
}
   const stopchanging=()=>{
    clearInterval(setInt)
    console.log(setInt);

}
console.log(setInt);

stop.addEventListener('click',stopchanging)

start.addEventListener('click',changingColor)

