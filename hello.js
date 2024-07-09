// Nav Bar Section

// Declarated All Elements Used In Javascript

const contentLinks = document.querySelector('.container-links');
const containerContents = document.querySelector('.container-content');
const borderBottom = document.querySelector('.bor-bot');
const menuCha = document.querySelector('.menu-cha');
const textArea = document.querySelector('textarea');
const displayError = document.querySelector('.display-error');
const displaySucess = document.querySelector('.display-sucess');
const input1 = document.querySelector('.name');
const input2 = document.querySelector('.email');
const linkContent = document.querySelector('.active-close');
const navUl = document.querySelector('nav ul');
const btnSend = document.querySelector('.submit');
const Skill = document.querySelector('.skills');
const Experience = document.querySelector('.experience');
const Education = document.querySelector('.education');
const Menu = document.querySelector('.menu');
const input3 = document.getElementById('message');
const Side = document.getElementById('side-content');
const Message = document.querySelector('#message');
const Error = document.querySelector('.error');
const Sucess = document.querySelector('.sucess');
const SKILL = document.querySelector('#skills');
const EXPERIENCE  = document.querySelector('#experience');
const EDUCATION = document.querySelector('#education');

// Second Section

function showContent() {
    Skill.addEventListener('click', () => {
        Skill.classList.add('bor-bot');
        Experience.classList.remove('bor-bot');
        Education.classList.remove('bor-bot');
        SKILL.classList.add('active-link');
        EXPERIENCE.classList.remove('active-contents');
        EDUCATION.classList.remove('active-contents');
    });
        
    Experience.addEventListener('click', () => {
        EXPERIENCE.classList.add('active-contents');
        containerContents.classList.remove('active-link');        
        EDUCATION.classList.remove('active-contents');
        Experience.classList.add('bor-bot');
        Skill.classList.remove('bor-bot');
        Education.classList.remove('bor-bot');
    });
    
    Education.addEventListener('click', () => {
        EDUCATION.classList.add('active-contents');
        EXPERIENCE.classList.remove('active-contents');
        containerContents.classList.remove('active-link');
        Education.classList.add('bor-bot');
        Experience.classList.remove('bor-bot');
        Skill.classList.remove('bor-bot');
    });

}

Experience.addEventListener('click', () => {
    showContent();
});

// Menu NavBar Section

function openmenu() {
    Side.style.right = "0";
    Side.style.transition = "0.5s";
    Side.style.translate = "20%";
}
    
function closemenu() {
    Side.style.right = "-200px";
    Side.style.transition = "0.5s";
    Side.style.translate = "-0%";
}

Side.addEventListener('click', () => {
    Side.style.right = '-200px';
    Side.style.transition = "0.8s";
    Side.style.translate = "-0%"; 
});

// Error In Form Section

function showError(errorElement, errorMessage) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("." + errorElement).innerHTML = errorMessage;
}

function clearError() {
    let errors = document.querySelectorAll('.errors');
    for (let error of errors) {
        error.classList.remove('display-error');
    }
}

btnSend.onclick = function (event) {
    clearError();

    if (input1.value === "") {
        showError('name-error', 'You have to enter your name');
        showError.classList.remove('email-error');
        return false;
    }

    if (input2.value === "") {
        showError('email-error', 'You have to enter your email');
        showError.classList.remove('name-error');
        return false;
    }

    if (input3.value === "") {
        showError('message-error', 'You have to enter your message');
        return false;
    }

    document.querySelector.classList.add('display-success');
    document.querySelector.innerHTML = "Your registration was successful.";

    event.preventDefault();
}

// Cercle Top

const calcValueScroll = () => {    
    const topContainer = document.querySelector('.top-cercle');
    const topSpan = document.querySelector('.icon-cerlce');
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        topContainer.style.display = "flex";
    } else {
        topContainer.style.display = "none";
    }
    topContainer.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
}

window.onscroll = calcValueScroll;
window.onload = calcValueScroll;