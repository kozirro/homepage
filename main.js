const kuba = 'kuba';
const age = '25';

let isHappy = false;
isHappy = 'true';


console.log(` Nazywam się ${kuba} i mam ${age} lat`);


const box = document.querySelector('.box-test');
box.innerHTML = "zabawa";
console.log(box.innerHTML)

const paragraphs = document.querySelectorAll('p');



var button = document.querySelector('.header__button--js');
button.addEventListener('click', (e) => {
    const headerTitle = document.querySelector('.header__title');
    headerTitle.innerHTML = 'zmieniony text';
});