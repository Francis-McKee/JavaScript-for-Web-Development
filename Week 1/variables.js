let name = 'John'; // Declaration and Intitalization

let count = 0;
count = 1;
console.log(count); // prints '1'

const PI = 3.14;
// PI = 4;
console.log(PI);
// runs error with 'PI = 4;' because you cant assign new value to const

var counter = 0; // var considered outdated because it is not blocked scope
// variables declared with var are available throughout the entire function or global scope

if(true) {
    var counter = 1; // prints '1'
    console.log(counter);
}

console.log(counter); // prints '1'
// even though counter was assigned the value '1' in the if statement above, it changed the console.log outside of it as well