/*
Note : - array is non primitive data type and use heap memory so it change the original value
*/


// singleton
// Object.jsUser  //this is object and in these type of object singleton is present



//interview question create a symbol add into object and print the value
// const addSymbol= Symbol()

//object literals
/*
const jsUser={
    name:"sarfraj",
    [addSymbol]:"interview", //how to add symbol interview question into object if you add like addSymbol:"interview", in console it prints the value only but if you check the type of that time it shows string but we want datatype as symbol only
    "last name":"sayyad",
    age:22,
    location:"airoli",
    email:"sarfraj@google.com",
    lastLogin:["monday", "friday"]
}
*/
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

//in the last name senario you cannot access using console.log(jsUser.last name);
console.log(jsUser["last name"]);
*/

/* how to update object

// jsUser.email="sarfraj@121gmail.com"
// console.log(jsUser);
// jsUser[addSymbol]="salar"
// console.log(jsUser);
*/

/* how to perfom function in object

jsUser.gretting=function(){
    console.log("hello world");
}
// console.log(jsUser.gretting); // when you write method like this it shows [Function (anonymous)]
// console.log(jsUser.gretting()); // we have to write method like this
console.log("A",jsUser);
console.log(jsUser);

jsUser.grettingSecond=function(){
    console.log("hello world second");
}
console.log(jsUser.grettingSecond());
console.log("B",jsUser);
console.log(jsUser);

*/
/*
// how to access same object referemce using this
jsUser.whishing=function(){
    console.log(`hello ${this.name}`);
}
console.log(jsUser.whishing());
*/

// how to define singleton object 
// const tinderUser=new Object()

/* how to add element in object
const swiggyUser={}
// console.log(swiggyUser);

swiggyUser.name="rakesh"
swiggyUser.age=22
swiggyUser.id="17feb"
console.log(swiggyUser);
*/

/*
// object nesting
const regularUser={
    email:"rajesh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rajesh",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
*/

/*
// merge two object
/*
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

//  to merge object use spread operator
const obj3={...obj1,...obj2}
console.log(obj3);
*/

/*
not use this process methos because spread operator you can use

// const obj3={obj1, obj2}
const obj3=Object.assign({},obj1,obj2) // empty {} is optional but use when you check the obj3=== obj1 output false and value not store in obj1 it store in empty object
console.log(obj3===obj1);
console.log(obj3);
console.log(obj1);


const obj4=Object.assign(obj1,obj2) // if you are not using empty object all value store in obj1 so when you check equality or obj1 object it shows true because all value store in obj1
console.log(obj4===obj1);
console.log(obj1);
*/


/*
Important all value and values of object store in array 
*/
/*
// mostly use in project because you can loop 
const obj5={1:"a",2:"b",3:"c"}
console.log(Object.keys(obj5)); // all key value store in array
console.log(Object.values(obj5)); // all object value store in array
*/

/*
// if you want to check whether property is exist in object or not
const obj7={1:"a",2:"b",3:"c"}
console.log(obj7.hasOwnProperty(age)); // it return boolean value
*/