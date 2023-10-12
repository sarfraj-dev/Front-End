let name="sarfraj";
let age=22;

// string Interpolation (Template Literal)
console.log(`my name is ${name} and my age is ${age}`);

// string method

const lastName="sayyad";
console.log(lastName.length);
console.log(lastName.charAt(5));
console.log(lastName.indexOf('a'));
console.log(lastName.substring(0,4)); //strat from 0 index and it not count last number
// console.log(lastName);
console.log(lastName.slice(1,5));

const gameName="   pubg    ";
console.log(gameName);
console.log(gameName.trim());  // it removes the white space (eg ;- when user enter email or any input filed that time it use to remove space)

const newName="sagar";
console.log(newName.replace('a', '-')); // it find and replace but starting only linke s-gar

console.log(newName.includes('ga')); // it return boolean value if search value is present on original value return true and vice-versa

const cityName="Navi-Mumbai-Maharashtra";
// const upperCityName=cityName.toLocaleLowerCase()
// console.log(upperCityName);
// console.log(upperCityName);
// console.log(upperCityName.split('m'));
console.log(cityName.split('m')); // it return an array and you can split using symbol,character, whitspace what ever is present in string it remove searching value


