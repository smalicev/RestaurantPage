import { xor } from "lodash";



const pageLoad = function pageLoad(){
const page = document.querySelector('#content');
const header = document.createElement('div');
const maintent = document.createElement('div');
const footer = document.createElement('div');
maintent.classList.add('maintent');
header.classList.add('header');

const mainCard3 = document.createElement('div');
mainCard3.classList.add('mainCard2');
mainCard3.innerHTML = '<p>Photo by Marc Pell on <a href="https://unsplash.com/@blinky264"> Unsplash</a></p>';
const mainCard2 = document.createElement('div');
mainCard2.classList.add('mainCard2');
mainCard2.innerHTML = '<h1>FROM BRANCH TO TABLE</h1>';
const mainCard4 = document.createElement('div');
mainCard4.classList.add('placeholder');
mainCard4.innerHTML = '';

const mainCard = document.createElement('div');
mainCard.classList.add('mainCard');


header.innerHTML = '<h1> The Green Thumb </h1>'
footer.innerHTML = '<p> Copyright © Srdjan Malicevic'


const menubut = document.createElement('button');
const aboutbut = document.createElement('button');
const contactbut = document.createElement('button');
footer.classList.add('footer');

menubut.classList.add('Restbut');
aboutbut.classList.add('Restbut');
contactbut.classList.add('Restbut');

menubut.innerText = 'Menu';
aboutbut.innerText = 'About';
contactbut.innerText = 'Contact';



page.appendChild(header);
page.appendChild(maintent);
page.appendChild(footer);

maintent.appendChild(mainCard);
mainCard.appendChild(mainCard2);
mainCard.appendChild(mainCard4);
mainCard.appendChild(mainCard3);


header.appendChild(menubut);
header.appendChild(aboutbut);
header.appendChild(contactbut);

menubut.setAttribute('id','menubut');
aboutbut.setAttribute('id','aboutbut');
contactbut.setAttribute('id','contactbut');
}

export { pageLoad };