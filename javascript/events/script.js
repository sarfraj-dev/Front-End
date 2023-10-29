//type, timestamp, preventdefault
// target, to element, srcElemrnt, currenttarget
// client x, client y, scree x, screen y
// alt key, ctrkey, shiftkey, keycode


const ulList=document.querySelector('#ulList')
ulList.addEventListener('click', function(e){
console.log(e.shiftKey);
})

/*

const ul=document.querySelector('#ulList');
ul.addEventListener('click', function(e){
console.log("ul clicked");
},false)

const apple=document.querySelector('#apple');
apple.addEventListener('click', function(e){
console.log("li clicked");
e.stopPropagation() //when i clicked on li item apple that time in console it print li but also parent element event to stop bubbling use e.stoppropogation
},false) //event propogation false true


//preventdefault
const link=document.querySelector('#link')
link.addEventListener('click',function(e){
    console.log("google clicked");
e.preventDefault()
e.stopPropagation()

})
*/

/*
const removeListItem=document.querySelector('#ulList')
removeListItem.addEventListener('click',function(e){
    
    console.log(e.target.tagName);
    if(e.target.tagName==='SPAN'){
        const removeItem=e.target.parentNode;
        removeItem.remove()
    }

    
})
*/