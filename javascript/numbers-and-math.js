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