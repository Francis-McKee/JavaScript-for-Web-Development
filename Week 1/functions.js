// FUNCTION
function addNumbers(a,b) {
    return a + b;
}

const sum = addNumbers(10,20);
console.log(sum);

// GLOBAL VARIABLE SCOPE
const globalVar = 'I am a global variable';

function logGlobal() {
    console.log(globalVar);
}

logGlobal();

// LOCAL VARIABLE SCOPE
function logLocal() {
    const localVar = 'I am a local variable';
    console.log(localVar);
}

logLocal();