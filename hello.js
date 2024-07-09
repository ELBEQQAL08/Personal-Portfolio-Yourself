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

// Form Section        

const Form = document.getElementById("sheetdb-form");
const Name = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('#message');

function sendEmail() {
    let bodyMessage = `Name: ${Name.value}<br> Email: ${email.value}<br> Message: ${message.value}`; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "elbeqqal.kamal@gmail.com",
        Password : "6AD28870DFA64419EE9CF3E1452C33B7B9F9",
        To : 'elbeqqal.kamal@gmail.com',
        From : "elbeqqal.kamal@gmail.com",
        Subject : 'This is the subject',
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});

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