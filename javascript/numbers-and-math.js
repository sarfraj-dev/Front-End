const age=22;
console.log(age.toString()); // it return string value if you check the typeof it will string

console.log(age.toFixed(4)); //it return string if you check type of and it will add decimal 0 like 22.0000


const balance=1000.50;
console.log(balance.toPrecision(4)); // return string round off the the value of after decimal


const seperateNumberWithComma = 10000000;
console.log(seperateNumberWithComma.toLocaleString('en-IN')); //by default it seperate with US counting value if you want you can change in inr using en-IN
/*
it detects if your computer local language if india it by default user inr
*/



/* --- ------ Maths  ------------------*/
// maths is an object

console.log(Math);
console.log(Math.round(4.4)); // it returns value between 0-1
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.sqrt(25));
console.log(Math.pow(5,3));
console.log(Math.sign(5)); //if value is positive return 1 negative -1 positive 0 return 0 and vice versa 

/*  most of the time use case of math.random */

console.log(Math.floor(Math.random()*10)+1);
const minimum=10;
const maximum=15;
console.log(Math.floor(Math.random()*(maximum-minimum+1))+minimum); // here 1 added because the final value should not be 0