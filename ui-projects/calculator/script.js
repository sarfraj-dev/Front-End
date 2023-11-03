const input=document.querySelectorAll('td');
const display=document.querySelector('.display');
const clear=document.querySelector('.clear');



const values=input.forEach(items => {

  items.addEventListener('click',(e)=>{
    let clickedValue = e.target.textContent;
    display.textContent += clickedValue;
// console.log(display);

  })

});

clear.addEventListener('click',(e)=>{
  console.log(display.remove());
  
})