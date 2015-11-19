/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var h1 = document.querySelector('#menu');
var nav = document.querySelector('nav');
var width = window.matchMedia("(max-width: 1025px)");

if (width.matches) {
    h1.classList.remove('invisible');
    h1.classList.add('menu');
    nav.classList.add('invisible');
} else {
    nav.classList.remove('invisible');
    h1.classList.remove('menu');
    h1.classList.add('invisible');
}

function show(){
    nav.classList.toggle('invisible');
}

h1.addEventListener('click', show);
