
let a=10;
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);


/*
in js var is already there in js so why we need let and const because of block scope {}
follow is example 
*/
{
    let e=10;
    const f=20;
    var g=30;  
}


// console.log(e);  //show error not defined 
// console.log(f);   //show error not defined
console.log(g);