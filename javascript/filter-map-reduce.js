const coding=[1,2,3,4,5,6,7,8,9,10];
/* Note other loop like foreach and all not returned the value but filter return value 
suppose if you want to check loop coditionally you use filter map reduce
*/

// coding.forEach( (items)=>{console.log(items>5);}) //not returned value

 const values=coding.filter((items)=>{items>5})
 console.log(values);
// coding.forEach( (items)=>{items>9})


//this loops not completed