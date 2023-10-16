// javscript is resizable and you can store different datatype in single array

const arr=[1,2,3,4,5,6]
// array methods

/*
Note :- array join() convert into string and change the copy value

const newArray= arr.join();
console.log(typeof(arr));
console.log(typeof (newArray));
console.log(newArray.replace('5', '-')); // it find and replace but starting only linke s-gar
console.log(arr);
console.log (newArray);

*/
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


// note :- array is non primitive data type it use heap so it change the original value
*/

// slice splice
/*
console.log("A",arr);

const mySlice = arr.slice(1,3) // here value is (1,3) so 1,2 three neglate and create array of slice value that is [2,3] it not change the original array
console.log(mySlice);
console.log("B",arr);

const mySplice= arr.splice(1,3) // here value is (1,3) so 1,2,3 create array so splice value is [2,3,4] and it change the original array
console.log(mySplice);
console.log("c",arr);
*/

/*
note :- the main differe between slice and splice is when you perform slice operation it not change ther original array but when you perform splice operation it change the originalarray
*/

/*
//  adding to array 

const marvelHeros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"];
// marvelHeros.push(dc)  // when we use push method to merge two array second array added as element[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros);
// const newHeros=[...marvelHeros,...dc]
console.log(marvelHeros);
*/

/*
in array flat method is used to merge subarray in one array

const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10]]];
console.log(anotherArray);
const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

*/

/*testing purpose

const array=[1,2,3,4,5]
const newArr=[6,7,8,9,10]
array.push(newArr)
console.log(array);
const newarray=array.flat(Infinity)
console.log(newarray);

*/
/*
// check value is array or not

console.log(Array.isArray("raj"));
*/

/*
//  convert into array
// console.log(Array.from("sarfraj"));

// console.log(Array.from({name:"sarfraj"}));

const score1=100;
const score2=200;
const score3=300;
console.log(score1);
const scoreArray = Array.of(score1,score2,score3);
console.log(scoreArray);
console.log(score1);

*/