/*---------------Brand---------------*/

document.getElementById('tags').innerText = "</>"

/*---------------Element get---------------*/

const burger = document.querySelector('.burger');
const navbar = document.querySelector('#navbar');
const header = document.querySelector('header');
const links = document.querySelectorAll('.links');
const logo = document.querySelector('.logo');
const mainh1 = document.querySelector('.main-section h1');
const typingP = document.querySelector('.typing');
const goup = document.querySelector('.go-up');

/*---------------Animating Main H1---------------*/

setInterval(()=>{
    if (mainh1.innerText == "Josmanuel Sandrea"){
        mainh1.innerText = "Josmanuel Sandrea|";
        validator = true;
    }else {
        mainh1.innerText = "Josmanuel Sandrea";
        validator = true;
    }
},500)

/*---------------Animating <p> in Main---------------*/

var iterator = 0;
var txt = "Web Developer";

function typeAnimation(){
    if (iterator < txt.length){
        typingP.innerHTML += txt.charAt(iterator);
        iterator++;
        setTimeout(typeAnimation, 150)
    }
}

typeAnimation();

/*---------------Burger Script for Responsive Design---------------*/

var burgerOn = false;

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        if (burgerOn){
            burgerOn = false;
            burger.classList.remove('burger-active');
            navbar.style.transform = "translateX(-100%)";
        }
    });
});

burger.addEventListener('click', ()=>{
    if (burger.classList.contains('burger-active')){
        burgerOn = false;
        burger.classList.remove('burger-active');
        navbar.style.transform = "translateX(-100%)";
    }else{
        burgerOn = true;
        burger.classList.add('burger-active');
        navbar.style.transform = "translateX(0%)";
    }
});

/*---------------Header animation when scrolling down---------------*/

window.addEventListener('scroll', ()=>{
    if (navbar.classList.contains('navbar-scrolled')){
        header.classList.add('navbar-active-scrolled');
    }
    if (window.scrollY > 0){
        header.classList.add('header-scrolled');
        logo.classList.add('logo-scrolled');
        navbar.classList.add('navbar-scrolled');
        burger.classList.add('burger-scrolled');
        links.forEach((item) =>{
            item.classList.add('links-scrolled')
        });
    }else {
        if (header.classList.contains('header-scrolled')){
            header.classList.remove('header-scrolled');
            header.classList.remove('navbar-active-scrolled');
        }
        links.forEach((item)=>{
            if(item.classList.contains('links-scrolled')){
                item.classList.remove('links-scrolled');
            }
        });
        if (logo.classList.contains('logo-scrolled')){
            logo.classList.remove('logo-scrolled');
        }

        if (navbar.classList.contains('navbar-scrolled')){
            navbar.classList.remove('navbar-scrolled');
        }

        if (burger.classList.contains('burger-scrolled')){
            burger.classList.remove('burger-scrolled');
        }
        goup.style.opacity = "0";
    }
    if (window.scrollY > 0) {
        goup.style.opacity = "1";
    }
});
