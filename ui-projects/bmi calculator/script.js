/*
1 why we use all selector inside function because we want the value if we use outside it store empty value
2 why we use preventdefault() because when we click on sumbit value goes to store in server we have to cancel the behaviour of form 
*/

const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result')


if(height==='' || height <=0 || isNaN(height)){
result.innerHTML="please enter a valid number"
}
else if(weight==='' || weight <=0 || isNaN(weight)){
result.innerHTML="please "
}
else{
    const formula=(weight/((height*height)/10000)).toFixed(2)
    result.innerHTML=formula
}


    })

