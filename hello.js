// Nav Bar Section

//  Declarated All Elements Used In Javascript

const contentLinks = document.querySelector('.container-links');
const containerContents = document.querySelector('.container-content');
const Skill = document.querySelector('.skills');
const Experience = document.querySelector('.experience');
const Education = document.querySelector('.education');
const borderBottom = document.querySelector('.bor-bot');
const SKILL = document.querySelector('#skills');
const EXPERIENCE  = document.querySelector('#experience');
const EDUCATION = document.querySelector('#education');
const Menu = document.querySelector('.menu');
const menuCha = document.querySelector('.menu-cha');
const Side = document.getElementById('side-content');
const input1 = document.querySelector('.name');
const input2 = document.querySelector('.email');
const Message = document.querySelector('#message');
const textArea = document.querySelector('textarea');
const Error = document.querySelector('.error');
const displayError = document.querySelector('.display-error');
const Sucess = document.querySelector('.sucess');
const displaySucess = document.querySelector('.display-sucess');

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
        
// Form Section        
        
// Google Sheet In Form 

const Form = document.getElementById('sheetdb-form');
const btnSend = document.querySelector('.submit');

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(Form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((Response) => Response.json())
    .then((html) => {
      // you can put any JS code here
      window.open("index.html", "_blank");
    });
});

// Error Message In Form

function showError(errorElement, errorMessage) {
    document.querySelector("." + errorElement).classList.add("display-error");
    document.querySelector("." + errorElement).innerHTML = errorMessage;
  }

btnSend.onclick = function(event) {

    if (Input.value === '') {
        showError('name-erro', )
    }
}