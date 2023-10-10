let score="33abc";
console.log(typeof score);

let valueInNumber= Number (score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

/*
values when convert in numbers

"33" => 33
"33abc" => NaN
"undefined" => undefined
true => 1; false 0
null => 0
*/

let booleanValue=1;
let convertBoolean= Boolean (booleanValue);
console.log(convertBoolean);

/*
 Boolean Conversion
1 => true
0 => false
"" => false
"valueAssign" => true
*/

let stringValue=33;
let stringConvert= String (stringValue);
console.log(stringConvert);
console.log(typeof stringConvert);