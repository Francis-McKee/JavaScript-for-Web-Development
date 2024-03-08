let fruits = ['apple', 'banana', 'orange'];

console.log(fruits); // outputs all elements
console.log(fruits[0]); // outputs element at index 0, 'apple' in this case

fruits[1] = 'grape';
console.log(fruits);
console.log(fruits.length); // outputs the length of the 'fruits' array, '3' in this case for the three elements

fruits.push('mango'); // adds 'mango' element to the end of the array
console.log(fruits);
fruits.pop(); // removes last element from array, 'mango' in this case 
console.log(fruits);

for (let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]); // outputs element of 'fruits' array at the current index 
}