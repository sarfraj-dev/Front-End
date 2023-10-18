// why we use function:- if you want to perform same task so we use function
/*
function myName(){
    console.log("sarfraj");
}
myName()
*/
// myName is reference myName() execution

/*
function addNumber(num1,num2){
    console.log(num1+num2);
}
addNumber(2,5)
*/

/*
// return 
function addNumber(num1,num2){
const addition =num1+num2;
return addition
//  return num1+num2 you can return like this 
}
const result=addNumber(2,5); //when we assign variable to function call that time it shows undefined because we not return anyting from function
console.log(result);
*/

/*
function loginUser(userName="sam") { // here sam assigned as default value 
    return `${userName} just login`    
}
loginUser("rajesh") //when you call like this but in the above function you return the so we need to variable to print value  like following steps
const userLogin= loginUser("rajesh"); // here we assign the variable so it run
console.log(userLogin);  

*/
/*

// shopping cart:-  in shopping cart user add multiple items in cat but in above examples we pass argument it define like 2,3 values
//rest operator ...

function calculateCartPrice(...num1) {
 return num1   
}
console.log(calculateCartPrice(200,300,400,500)); //[ 200, 300, 400, 500 ]
/*
when we not know about how much argument is passed that time we use reast operator 
so we need not to passed multiple parameter  and the value is in array [ 200, 300, 400, 500 ] 
*/

/*
//object passed in function

const user={
    name:"sarfraj",
    age:22
}
function assessUserObject(userObject){
    console.log(`my name is ${userObject.name} and my age is ${userObject.age}`);
}
assessUserObject(user)
/*
assessUserObject({
    name:"sarfraj",
    age:22   
})
you can passed object as an argument

*/

// Array passed in function
const array=[1,2,3,4,5]
function accessArray(parameterArray) {
    return parameterArray;
}
console.log(accessArray(array));

/*
console.log(accessArray([1,2,3,4,5]));

you can passed array as an argument
*/