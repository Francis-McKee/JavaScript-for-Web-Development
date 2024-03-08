let str1 = 'Hello';
let str2 = 'world';
let result = str1 + " " + str2;
console.log(result); // prints 'Hello world'

let resultTwo = str1.concat(" ", str2);

console.log(resultTwo); // prints 'Hello world'

let str = "Hello, World!";
let result1 = str.slice(7,12);
let result2 = str.substring(7,12);
console.log(result1); // prints 'World'
console.log(result2); // prints 'World'