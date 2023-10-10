const accountId=1711;
let accountEmail="sarfraj@arcloop.com";
var accountPassword="123";
accountCity="mumbai";
let accountState;

//accountId=2; //not allowed
accountEmail="sarfraj.google.com";
accountPassword="17112001";
accountCity="navi mumbai";
console.table([accountEmail, accountPassword, accountCity, accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
undefined means variable are declared in code value not assigned
*/