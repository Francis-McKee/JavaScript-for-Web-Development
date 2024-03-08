const div = document.querySelector('div');
const spanOne = document.getElementById('one');
const spanTwo = document.getElementById('two');

console.log(spanOne.getAttribute('name'));

spanOne.setAttribute('name', 'abcde');
spanOne.removeAttribute('name');
spanOne.id = 'ahshhjbd';

spanTwo.classList.add('new-class');
spanTwo.classList.remove('new-class');

spanOne.style.color = 'red';
spanTwo.style.backgroundColor = 'green';