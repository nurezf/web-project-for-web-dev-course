// nav collapsible

const menu=document.getElementById('nav');
const navList=document.getElementById('nav__list');
const menuIcon=document.getElementById('menu-icon');
const lists=document.querySelectorAll('.list__item');

menu.addEventListener('click',()=>{
    navList.classList.toggle('active');
    menuIcon.classList.toggle('none');
    console.log("edf");
});