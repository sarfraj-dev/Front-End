// singleton
// Object.jsUser  //this is object and in these type of object singleton is present



//interview question create a symbol add into object and print the value
const addSymbol= Symbol()

//object literals
const jsUser={
    name:"sarfraj",
    [addSymbol]:"interview", //how to add symbol interview question into object if you add like addSymbol:"interview", in console it prints the value only but if you check the type of that time it shows string but we want datatype as symbol only
    "last name":"sayyad",
    age:22,
    location:"airoli",
    email:"sarfraj@google.com",
    lastLogin:["monday", "friday"]
}

/*
// interview console output
console.log(typeof(jsUser.addSymbol)); //here the type of addsymbol is string but we want as symbol only so
console.log(jsUser[addSymbol]); // print symbol like this
console.log(typeof(addSymbol));
*/

/*
//how to access object
// console.log(jsUser.age);
// console.log(jsUser["age"]);

//in the last name senario you cannot access using .
console.log(jsUser["last name"]);
*/