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