// javscript is resizable and you can store different datatype in single array

const arr=[1,2,3,4,5,6]
// array methods
/*

arr.push(7); //add element at the end
arr.pop()  // remove last element 
arr.unshift(10) //add element from starting
arr.shift() //remove first element
const newArray= arr.join() //join method convert the array into string and copy all element to new array
console.log(arr);
console.log(typeof(newArray));
console.log(newArray);

*/

/*
const test= arr;
console.log(test);
test.push(50);
console.log(test);
console.log(arr)


note :- array is non primitive data type it use heap so it change the original value
*/

// slice splice
console.log("A",arr);

const mySlice = arr.slice(1,3) // here value is (1,3) so 1,2 three neglate and create array of slice value that is [2,3] it not change the original array
console.log(mySlice);
console.log("B",arr);

const mySplice= arr.splice(1,3) // here value is (1,3) so 1,2,3 create array so splice value is [2,3,4] and it change the original array
console.log(mySplice);
console.log("c",arr);

/*
note :- the main differe between slice and splice is when you perform slice operation it not change ther original array but when you perform splice operation it change the originalarray
*/