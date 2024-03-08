console.dir(document);
console.log(document.domain); // deprecated for security reasons https://developer.mozilla.org/en-US/docs/Web/API/Document/domain 
console.log(document.URL);

document.title = 'DOM MANIPULATION';

const body = document.body;
body.append('hello');

const div = document.createElement('div'); // createElement() creates the element but does not automatically add it to the page
console.log(div);
div.innerText = 'JavaScript';
body.append('div'); // create a div with text 'JavaScript' to <body>

body.removeChild(div);
div.remove();