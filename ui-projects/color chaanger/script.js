const buttons=document.querySelectorAll('.colorDiv')
const body=document.querySelector('.main')
buttons.forEach((items)=>{
items.addEventListener("click", function(e){ 
        console.log(e);
        console.log(e.target);
        if (e.target.classList.contains('gray')) {
         body.style.backgroundColor="gray";    
        }
        else if (e.target.classList.contains('yellow')) {
                body.style.backgroundColor="yellow";    
         
        }
        else if (e.target.classList.contains('orange')) {
                body.style.backgroundColor="orange";    
         
        }        else if (e.target.classList.contains('white')) {
                body.style.backgroundColor="white";    
         
        }
        else{
                body.style.backgroundColor="white";  
        }
        
    }); 

})