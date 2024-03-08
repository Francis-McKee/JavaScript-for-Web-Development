let person = {
    name: 'John',
    age: 25,
    isStudent: true
};

console.log(person.name); // outputs 'name' of object 'person' using dot notation
console.log(person['age']); // outputs 'age' of object 'person'

person.age = 30;
console.log(person.age);

person.city = 'New York'; // creates attribute 'city' to object person and sets it to 'New York'
console.log(person); // outputs object 'person'

for (let key in person) { // how to iterate with objects - for loop will print all attributes of object 'person'
    console.log(key + ': ' + person[key]);
};