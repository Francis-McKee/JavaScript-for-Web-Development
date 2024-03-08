let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

/* 
prints
'1'
'2'
'3'
'4'
'5'
*/

do {
    console.log(i);
    i++;
} while (i > 5);

/*
prints
'1'
*/

// notice it still prints 1 iteration even if the while condition is not satisfied 