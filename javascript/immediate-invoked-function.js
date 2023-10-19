// immediately invoked function expression (iife)

// why we use iife function because global scope ke pollution se bachane ke liye we use iife

(function iife(){
console.log("this is iife function");
})();   // when we use iife function after immediate invked function need to add ; other wise shows error
(()=>{
    console.log(`iife arrow function`);
})()