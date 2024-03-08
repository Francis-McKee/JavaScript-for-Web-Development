let str1 = "Hello World";

let str2 = 'This is a string';

let str3 = `123`;
// strings can use single or double quotes, or backticks

console.log(typeof str1, typeof str2, typeof str3);

console.log(`1 + 2 = ${1 + 2}`); // prints '1 + 2 = 3'

console.log(str.length); // char length of str2, including spaces (16)

console.log(str2[0]); // char of str2 at index 0 (T)

str2[0] = 'H'; // no affect on the string, because in JS strings are immutable
console.log(str2);