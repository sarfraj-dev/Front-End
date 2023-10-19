//  this keyword refere current context
/*
const user={
    username:"sarfraj",
    age:22,
    logginMessage:function(){
        console.log(`${this.username} successfully log In`);
        console.log(this);
    }
}

console.log(user.logginMessage());
console.log(this);  // it refer global object but we are using node to run js in local that's why it gives {} object but when you run same in browser it give window object

*/

//how this behav in normal or arrow function

/*
function chai() {
    let name="sarfraj"
    console.log(this.name);  //now it shows undefined 
    // console.log(this);  //it gives global object
}
chai()
*/

/*
const arrow =()=>{
    let name="sarfraj"
    console.log(this.name);  //now it shows undefined 
    // console.log(this);  //it gives global object
}
arrow()
*/


/*
// implicit return  : - it means without return keyword or { } 

const arrow =(a,b)=>  a+b;
console.log(arrow(5,5));

const arrow2= (a,b)=>(a+b)
console.log(arrow2(5,6));

// how to use object in implicit return and what is the use of second ()
const addThree =()=>({userOne:"rakesh"})
console.log(addThree());

*/

