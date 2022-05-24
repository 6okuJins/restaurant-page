import firstLoad from "./functions/firstLoad";
import resetPage from "./functions/resetPage";
import contact from "./pages/contact";
import header from "./pages/header";
import home from "./pages/home";
import menu from "./pages/menu";

import './styles/style.css';

firstLoad();

const content = document.querySelector('#content');
const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');

homeTab.addEventListener('click', () => {
    resetPage();
    const {testimonial, hours, location} = home();
    content.append(testimonial, hours, location);
});

menuTab.addEventListener('click', () => {
    resetPage();
    const {food} = menu();
    content.append(food);
});

contactTab.addEventListener('click', () => {
    resetPage();
    const {myContact} = contact();
    content.append(myContact);
});