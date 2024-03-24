// import {sum} from './lib.js'
const { isUtf8 } = require('buffer');
const fs=require('fs');


// const txt=fs.readFileSync('demo.txt', "Utf-8")
const t1=performance.now();
fs.readFile('demo.txt', "Utf-8",(err,txt)=>{
    console.log(txt);
})
const t2=performance.now();
console.log(t2-t1);

// console.log(txt);
// console.log(sum(4,5));
const a=5;
