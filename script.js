/* **************** *
 * GENERAL VARIABLES *
 ****************** */
const pCloseBtn = document.querySelector('.p-cross-btn');
const popUp = document.querySelector('.section-popup');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay2');

// THERE IS SCRIPT FOR POP UP MENU

const hiddenMenu = document.querySelector('.hidden-menu');
const hamburguer = document.querySelector('#hamburguer-menu');
const colseTag = document.querySelector('.cancel-img');
const portfolioItem = document.querySelectorAll('.hidden-item');

hamburguer.addEventListener('click', function () {
  hiddenMenu.style.display = 'flex';
});
colseTag.addEventListener('click', function () {
  hiddenMenu.style.display = 'none';
});
portfolioItem.forEach(element => {
  element.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
  });
});

pCloseBtn.addEventListener('click', () => {
  popUp.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('hide-scroll');
});


// ========= Add cards dynamically  ==========

function addhtml() {
  // var section = document.createElement('section');
  // section.setAttribute('class', 'section-work');
  // section.setAttribute('id', 'projectSection');
  // var div = document.createElement('div');
  // div.setAttribute('class', 'work-public-container');

  var dynamichtml = `

  `;
  var section = document.createElement('section');
  var div = document.createElement('div');
  div.innerHTML = dynamichtml;
  section.appendChild(div);
  var targetelement = document.getElementById('targetelemenet');
  while (targetelement.firstChild) {
    targetelement.removeChild(targetelement.firstChild);
  }
  var clonedDiv = div.cloneNode(true);
  targetelement.appendChild(clonedDiv);
  // targetelement.appendChild(section);
}
window.addEventListener('load', addhtml);

// ====================== cards objext ================

const allProjectInfo = [
  // Project 1
  {
    name: 'My Crypto',
    description: [
      'My Crypto is a cutting-edge, responsive web application that provides real-time updates on the current prices of the most popular cryptocurrencies. Built with a blend of modern technologies, this dynamic platform harnesses the power of React and Redux, supported by CSS3 for sleek and intuitive design',
    ],
    imageSrc: './img/mycrypto.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://64ddfa6f503d267147502fb8--tiny-sfogliatella-1f3791.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/My-crypto',
  },
  // Project 2
  {
    name: 'Bookstore',
    description: [
      'Bookstore is a web application built with React and Redux that allows users to explore, categorize, and manage books. It features a user-friendly interface with options to add, edit, and remove books while tracking their reading progress',
    ],
    imageSrc: './img/bookstore.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://64cd86e7739d9460c2d1d2c9--lucent-bavarois-61bf5d.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/bookstore',
  },
  // Project 3
  {
    name: 'Worl Vista',
    description: [
      'World Vista, the JavaScript Capstone project, is an extensive and enlightening web application that serves as an invaluable resource for exploring information on approximately 250 countries around the world. This impressive project offers an in-depth look into the diverse cultures, economies, geographies, and demographics of nations spanning the globe',
    ],
    imageSrc: './img/worldvista.png',
    technologies: ['JavaScript', 'CSS', 'Bootstrap', 'Html'],
    liveDemo: 'https://gregarious-cupcake-5d65a2.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/World-Vista',
  },
  // Project 4
  {
    name: 'Legendary Portfolio',
    description: [
      'A visually captivating and interactive portfolio website. Built with HTML, CSS, and JavaScript, incorporating Bootstrap for enhanced styling. This project showcases your work, skills, and achievements in a sleek and memorable manner.',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
  // Project 5
  {
    name: 'Awesome Book',
    description: [
      'An interactive web application for managing and organizing your favorite books. Developed using HTML, CSS, JavaScript, and Bootstrap. Features include adding and removing books, storing book details, and a user-friendly interface.',
    ],
    imageSrc: './img/awesomebook.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveDemo: 'https://najibullahjafari.github.io/Awesome-books/',
    sourceLink: 'https://github.com/najibullahjafari/Awesome-books',
  },
  // Project 6
  {
    name: 'Leaderboard',
    description: [
      'Leaderboard is a a web page that will save your score and your name online, It is developed by HTML, CSS, JavaScript, Git flow, API.',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://classy-cheesecake-b6b41b.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/Leaderboard',
  },
  // Project 7
  {
    name: 'Space Traveller Hube',
    description: [
      'This is a React and Redux website that displays a list of Rockets and Space Missions and allows you to book rockets and join selected space missions.This is a React and Redux website that displays a list of Rockets and Space Missions and allows you to book rockets and join selected space missions.'
    ],
    imageSrc: './img/space.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://endearing-flan-d8189e.netlify.app/',
    sourceLink: 'https://github.com/MasumaJaffery/space-travelers-hub',
  },
];

const projectBtns = document.querySelectorAll('.btn-project');

// ====================== VALIDATION ==============

// document
//     .getElementById("contact-form-container")
//     .addEventListener("submit", function (e) {
//         e.preventDefault();
//         let emailInput = document.getElementById("email");
//         let errormessege = document.getElementById("errormessage");
//         if (emailInput.value.toLowerCase() != emailInput.value) {
//             errormessege.textContent = "Email should be in lowercase!";
//             if (!emailInput) {
//                 console.log("the input form should not be empty");
//             }
//         } else {
//             errormessege.textContent = " ";
//             this.submit;
//         }
//     });

/* ****************
 * POP UP VARIABLES *
 *************** */
const heading = document.querySelector('.p-heading-primary');
const techContainer = document.querySelector('.p-tech-box');
const tech = document.querySelector('.p-tech-item');
const descBox = document.querySelector('.p-description-box');
const description = document.querySelector('.p-description');

/* ****************
 * EVENT LISTENERS *
 *************** */

for (let i = 0; i < projectBtns.length; i += 1) {
  const currentProject = allProjectInfo[i];
  projectBtns[i].addEventListener('click', event => {
    // Clear any existing content
    const popup = document.querySelector('.section-popup');
    popup.querySelector('.p-heading-primary').textContent = currentProject.name;
    
    const techBox = popup.querySelector('.p-tech-box');
    techBox.innerHTML = ''; // Clear the existing technologies
    for (let k = 0; k < currentProject.technologies.length; k += 1) {
      const curTech = document.createElement('li');
      curTech.className = 'p-tech-item';
      curTech.textContent = currentProject.technologies[k];
      techBox.appendChild(curTech);
    }

    const descriptionBox = popup.querySelector('.p-description-box');
    descriptionBox.innerHTML = ''; // Clear the existing description
    for (let k = 0; k < currentProject.description.length; k += 1) {
      const curDesc = document.createElement('p');
      curDesc.className = 'p-description';
      curDesc.textContent = currentProject.description[k];
      descriptionBox.appendChild(curDesc);
    }

    // Optionally, set the image source based on the current project
    const primaryImage = popup.querySelector('.p-primary-image');
    primaryImage.src = currentProject.imageSrc;

    event.preventDefault();
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.classList.add('hide-scroll');
  });
}



const btnpopup = document.querySelector('btn--popup');
btnpopup.addEventListener('click', function () {
  window.open('https://najibullahjafari.github.io/');
});
// =============== save data ===================

const nameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");
const textInput = document.querySelector("textarea");

function saveToStorage() {
    const saveData = {
        name: nameInput.value,
        email: emailInput.value,
        text: textInput.value,
    };

    localStorage.setItem("contactFormData", JSON.stringify(saveData));
}

nameInput.addEventListener("input", saveToStorage);
emailInput.addEventListener("input", saveToStorage);
textInput.addEventListener("input", saveToStorage);

document.addEventListener("DOMContentLoaded", () => {
    const dataSaved = localStorage.getItem("contactFormData");
    if (dataSaved) {
        const data = JSON.parse(dataSaved);
        nameInput.value = data.name;
        emailInput.value = data.email;
        textInput.value = data.text;
    }
});