/*
note :- The setInterval() method calls a function at specified intervals (in milliseconds).

The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
*/

const time=document.querySelector('.currentTime')

setInterval(function(){
    const date=new Date()
const localTime=date.toLocaleTimeString()
time.innerHTML=`${localTime}`
},1000)