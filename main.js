const kuba = 'kuba';
const age = '25';

let isHappy = false;
isHappy = 'true';


console.log(` Nazywam się ${kuba} i mam ${age} lat`);


const box = document.querySelector('.box-test');
box.innerHTML = "zabawa";
console.log(box.innerHTML)

const paragraphs = document.querySelectorAll('p');

var menuSwitcher = document.querySelector('.navigation__switcher--js');
menuSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list');
    navigationList.classList.toggle('navigation__list--visible')
});