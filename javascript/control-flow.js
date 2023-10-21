// if statement

// >, < , >= , <=, == , === ,!= , !===
/*
if (5 === "5") {
    console.log("true");
}
else{
console.log("false");
}
*/

//switch statement
/*
const month=5;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default");
        break;
}*/

// truthy and falsy value

/*
falsy values

false
0
""
null
undefined
null
NaN
*/


/*
truthy value

true
"0"
'false'
" "
[]
{}
fuunction(){}
*/

// nullish  coalescising operator (??): null undefined
/*
let val1;
// val1=5 ?? 10             => 5
// val1= null ?? 10            => 10
// val1= undefined ?? 15       => 15
// val1= null ?? 10 ?? 15;     =10


console.log(val1);
*/



// terniary operator
// conditon ? true : false
const teaPrice = 100;
teaPrice >=50 ?console.log("no tea") : console.log("buy tea");