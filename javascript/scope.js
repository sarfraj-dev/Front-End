
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
/*
{
    let e=10;
    const f=20;
    var g=30;  
}


// console.log(e);  //show error not defined 
// console.log(f);   //show error not defined
console.log(g);
*/

/*
//nested scope 

function one() {
    const name="sarfraj";
    function two() {
        const age =22;
        console.log(name); //you can access name variable because it in global variable for function one() 
    }
    // console.log(age);  // you cannot access age variable because it in local scope or block scope
    two()
}
one()
*/

// interesting question
// console.log(one(5)); //here we can access function 

function one(num1) {
    return num1 +1;
    // return num1[2]+1
}
console.log(one(5));

// console.log(two(10));  //here we cannot access function because of initialization

const two=function two(two) {
    return two+2
}
console.log(two(10));