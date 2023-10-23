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
for (let index = 1; index < 20; index++) {
if (index===5) {
    console.log("5 detected");
    continue
}
    console.log(`${index}`);
    
}