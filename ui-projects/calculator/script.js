const input=document.querySelectorAll('td');
const display=document.querySelector('.display');
const clear=document.querySelector('.clear');


 for (const items of input) {
    items.addEventListener('click',(e)=>{

      const ts=  display.innerHTML=e.target


        console.log(ts);

    })
 }

