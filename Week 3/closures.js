/*
function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar);
    };

    return inner;
};

const closureFunction = outer();
closureFunction();
*/

function outer() {
    const outerVar = 'outer';

    function inner() {
        const innerVar = 'inner';

        console.log(innerVar + ' ' + outerVar);

    };

    inner();
};

outer();

// outputs 'inner outer', both innerVar and outerVar, because the inner function is within the scope of the outer function