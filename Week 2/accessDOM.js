console.log(document.getElementById('hello'));

let items = document.getElementsByClassName('green');
console.log(items);

console.log(document.getElementsByTagName('li'));

console.log(document.querySelector('.green')); // returns first element with class 'green'
console.log(document.querySelectorAll('.green')); // returns all elements with class 'green'