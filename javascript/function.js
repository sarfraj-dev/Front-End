// why we use function:- if you want to perform same task so we use function
function myName(){
    console.log("sarfraj");
}
myName()
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

function loginUser(userName="sam") { // here sam assigned as default value 
    return `${userName} just login`    
}
loginUser("rajesh") //when you call like this but in the above function you return the so we need to variable to print value  like following steps
const userLogin= loginUser("rajesh"); // here we assign the variable so it run
console.log(userLogin);  
