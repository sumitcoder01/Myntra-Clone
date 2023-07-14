console.log("Welcome To My Myntra Website");

let burger = document.getElementById('burger');
let navbar = document.querySelector('.navbar');
let navleft = document.querySelector('.navleft');
let navright = document.querySelector('.navright');

burger.addEventListener('click',()=>{
    navbar.classList.toggle('navchange');
    navleft.classList.toggle('change');
    navright.classList.toggle('change');
});