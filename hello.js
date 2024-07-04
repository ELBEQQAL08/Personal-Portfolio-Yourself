// Nav Bar Section

//  Declarated All Elements Used In Javascript

const Active = document.querySelector('.active');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
const Skills = document.querySelector('.skills');
const Experience = document.querySelector('.experience');
const Education = document.querySelector('.education');
const HTML = document.querySelector('.html');
const WEB = document.querySelector('.web');
const borderBottom = document.querySelector('.border-bottom-js');
const HTML1 = document.querySelector('.html-1');
const WEB1 = document.querySelector('.web-1');
const HTML2 = document.querySelector('.html-2');
const WEB2 = document.querySelector('.web-2');
const H3 = document.querySelector('.html-2');

// Second Section

Experience.addEventListener('click', () => {
    Experience.classList.add('border-bottom-js');
    HTML1.style.display = "block";
    WEB1.style.display = "block";
    Skills.classList.remove('border-bottom-js');
    H3.classList.remove('.html-2');
})