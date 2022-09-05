


const pageLoad = function pageLoad(){
const page = document.querySelector('.content');

const header = document.createElement('div');
const maintent = document.createElement('div');
const footer = document.createElement('div');
maintent.classList.add('main');
header.classList.add('header');
footer.classList.add('footer');


const menubut = document.createElement('button');
const aboutbut = document.createElement('button');
const contactbut = document.createElement('button');

menubut.classList.add('Restbut');
aboutbut.classList.add('Restbut');
contactbut.classList.add('Restbut');

page.appendChild('header');
page.appendChild('maintent');
page.appendChild ('footer');

header.appendChild('menubut');
header.appendChild('aboutbut');
header.appendChild('contactbut');

}

export { pageLoad };