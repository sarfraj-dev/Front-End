//  Stack Memory ( inside primitive data type stack memory use)

// it take the copy of value and changes in the copy of value

let name="sarfraj";
let lastName=name;
lastName="sayyad";

console.log(name); // sarfraj
console.log(lastName);  //sayyad


//  heap Memory ( inside non-primitive data type stack memory use)

// it takes the same reference and change the original value
let userOne={
    name:"sarfraj",
    age:22
}
console.log(userOne.age);
let userTwo= userOne;
console.log(userTwo.age);
userTwo.age=24;
console.log(userTwo.age);
console.log(userOne.age);
