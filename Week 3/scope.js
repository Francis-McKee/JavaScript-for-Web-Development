function greet() {
    const message = 'Hello';
    console.log(message);
};

greet(); // returns message 'Hello'

console.log(message); // returns an error because message is only defined within the 'greet' function