const imgSlider = (anything) => document.querySelector('.pic').src = anything

// document.querySelector('.pic'): This is a way to find and select an element on the webpage. It looks for an element with the class name 'pic'. It's like saying, "Hey computer, find me the element that has a class called 'pic'."

// .src = anything;: Once the element with the class 'pic' is found, we can


const Changebgcolor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('header ul');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});