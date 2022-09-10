import _ from 'lodash';
import './style.css';

import { pageLoad } from './mainpage.js';
import { menu } from './menu.js';
import { about } from './about.js';
import { contact } from './contact.js';
console.log("test24");
pageLoad();

const menubut = document.querySelector('#menubut')
const refr = document.querySelector('.mainCard')

menubut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    menu();
});

const aboutbut = document.querySelector('#aboutbut')
aboutbut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    about();
});

const contactbut = document.querySelector('#contactbut')
contactbut.addEventListener('click', function(e){
    const currnode = document.querySelector('.mainCard2');
    currnode.remove();
    contact();
});