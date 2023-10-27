// for loop
/*
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
}*/
/*
for (let i = 1; i <=10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop ${j} outer ${i}`);
console.log(`${i} * ${j} = ${i*j}`);
    }
    
}*/
/*
array=['raj','sarfraj','swapnil']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}*/

/*
//break and continue
for (let index = 1; index < 20; index++) {
if (index===5) {
    console.log("5 detected");
    break
}
    console.log(`${index}`);
    
}
*/
/*
for (let index = 1; index < 20; index++) {
if (index===5) {
    console.log("5 detected");
    continue
}
    console.log(`${index}`);
    
}*/


//while loop
/*
let index=1
while (index<10) {
    console.log(`${index}`);
    index=index+2;
}
*/
/*
let newArray=['raj','sarfraj','swapnil']
let index=0
while (index<newArray.length) {
    const element=newArray[index]
    console.log(element);
    index++
    // console.log(`after increment ${index}`);
}*/

// do while loop
/*
let score =1
do {
    console.log(`${score}`);
    score++;
} while (score <10);*/
/*

let doArray=["sarfraj","salar","sayyad"];
let indexofDo=3;
do {
    console.log(`${doArray[indexofDo]}`);
    indexofDo++;
} while (indexofDo<doArray.length);*/


//higher order array loops

//for of loop
/*
const arr=[1,2,3,4,5,6,7,8,9];
for (const value of arr) {
 console.log(value);   
}*/

/*
const name="sarfraj";
for (const val1 of name) {
    console.log(`${val1}`);
}
*/
const myObject={
    game:'pubg',
    game2:"freefire"
}

/* 
note : - for of loop is not use in object

for (const obj of myObject) {
    console.log(obj);
}*/
/* for in loop is used to iterat object

for (const key in myObject) {
   console.log(`${myObject[key]}`);
}
*/
/*
const forInArrY=["swapnil","suresh","bomble"];

for (const key in forInArrY) {
 console.log(`${forInArrY[key]}`);
}*/

const language=["js",'cpp','py'];
// language.forEach(function (items){console.log(`${items}`);})

// function name(items) {
//     console.log(items);
// }
// language.forEach(name)

// language.forEach( (items,ind,aa)=>{console.log(items,ind,aa);})

const myCoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
    {
        languageName:"java",
        languageFile:"java"
    }
]
// myCoding.forEach((items)=>{console.log(items.languageName)})
for (const key in myCoding) {
   console.log(myCoding[key].languageName);
}