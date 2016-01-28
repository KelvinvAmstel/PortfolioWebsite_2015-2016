/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var h1 = document.querySelector('#menu');
var nav = document.querySelector('nav');
var width = window.matchMedia("(max-width: 1025px)");
var linkedin = document.querySelector('#li');
var github = document.querySelector('#gi');
var mail = document.querySelector('#ma');

var link = document.querySelector('#link');
var gith = document.querySelector('#gith');
var ma = document.querySelector('#mail');

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

function hover1(){
    document.getElementById("li").src='./img/Linkedin3.png';
}

function hover2(){
    document.getElementById("li").src='./img/Linkedin4.png';
}

function hover3(){
    document.getElementById("gi").src='./img/github4.png';
}

function hover4(){
    document.getElementById("gi").src='./img/github3.png';
}

function hover5(){
    document.getElementById("ma").src='./img/mail.png';
}

function hover6(){
    document.getElementById("ma").src='./img/mail1.png';
}

function hover7(){
    document.getElementById("link").src='./img/link_icon_a.jpg';
}

function hover8(){
    document.getElementById("link").src='./img/link_icon.jpg';
}

function hover9(){
    document.getElementById("gith").src='./img/github_icon_a.jpg';
}

function hover10(){
    document.getElementById("gith").src='./img/github_icon.jpg';
}

function hover11(){
    document.getElementById("mail").src='./img/mail_icon_a.jpg';
}

function hover12(){
    document.getElementById("mail").src='./img/mail_icon.jpg';
}

h1.addEventListener('click', show);
linkedin.addEventListener('mouseover', hover1);
linkedin.addEventListener('mouseout', hover2);
github.addEventListener('mouseover', hover3);
github.addEventListener('mouseout', hover4);
mail.addEventListener('mouseover', hover5);
mail.addEventListener('mouseout', hover6);

link.addEventListener('mouseover', hover7);
link.addEventListener('mouseout', hover8);
gith.addEventListener('mouseover', hover9);
gith.addEventListener('mouseout', hover10);
ma.addEventListener('mouseover', hover11);
ma.addEventListener('mouseout', hover12);
