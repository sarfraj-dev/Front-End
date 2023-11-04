/*const promiseOne= new Promise((resolve, reject)=>{
// do an async task
setTimeout(()=>{
console.log("hello");
resolve()
},1000)

})
promiseOne.then(()=>{
    console.log("promise consumed");
})*/

/*
new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("second method to create promise");
    resolve()
},1000)
}).then(()=>{
    console.log("created");
})*/

/*
const promiseThree=new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve({userName:"sarfraj",email:"sarfraj@example.com"})
},1000)
})
promiseThree.then((user)=>{
    console.log(user);
})*/

/*
const promiseFour=new Promise((resolve,reject)=>{
setTimeout(()=>{
let error=true;
if (!error) {
    resolve({userName:"sarfraj",pass:"123"})
}
else{
    reject("ERROR:something went wrong")
}
}),1000
})
promiseFour.then((user)=>{
console.log(user);
return user.userName;
}).then((userName)=>{
console.log(userName);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
    console.log("promise is finally resolved or reject");
})*/

/*

const promiseFive=new Promise((resolve,reject)=>{
setTimeout(()=>{
let error=true;
if (!error) {
    resolve({user:"js",pass:"123"})
}
else{
    reject("ERROR")
}
},1000)
})
async function promiseReturn() {
    try {
        console.log(await promiseFive);
    } catch (error) {
        console.log(error);
    }
}
promiseReturn()
*/

/*
async function apiPromise() {
    try {
      const response=await  fetch('https://jsonplaceholder.typicode.com/users')
        const jsonConvert=await response.json()
        console.log(jsonConvert);
    } catch (error) {
     console.log("ERROR"  ,error);   
    }
}
apiPromise()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
return data.json();
}).then((parseData)=>{

 parseData.forEach(items => {
    console.log(`${items.name} + ${items.phone}`);
    // console.log(items.phone);

});
// return parseData

})

.catch((error)=>{
    console.log(error);
})

