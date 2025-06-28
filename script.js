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
//============ Sticky navigation  ===============//
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.section-navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
});

// ========= Add cards dynamically  ==========

function addhtml() {
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
  {
    name: 'AWEC ERP',
    description: [
      'AWEC ERP is a comprehensive CMS web based application designed to provide all the necessary features for managing an organization. It includes modules for managing employees, departments, projects, and more. The application is developed using Laravel and Livewire.',
    ],
    imageSrc: './img/awec_project/1.jpg',
    technologies: ['Livewire', 'Laravel', 'Tailwind', 'CSS3', 'MySQL', 'PHP', 'Alpine.js',],
    liveDemo: 'https://awecis.info/',
    sourceLink: '#',
  },
  {
    name: 'Afghanistan Tourism Portal',
    description: [
      'Afghanistan Tourism Portal which is developed is comprehensive web application. We considered many aspects of a tourism portal for example hotel, transport, tour guide and so on. The application is developed using Laravel and React.',
    ],
    imageSrc: './img/tourismportalimage/first.jpeg',
    technologies: ['React', 'Laravel', 'Tailwind', 'CSS3'],
    liveDemo: 'https://www.linkedin.com/in/najibullahjafari/details/projects/',
    sourceLink: '#',
  },
  // Project 1
  {
    name: 'My Crypto',
    description: [
      'My Crypto is a cutting-edge and responsive web application that offers real-time updates on the current prices of the most popular cryptocurrencies. Developed with a combination of modern technologies, this dynamic platform leverages the power of React and Redux, complemented by CSS3 for a sleek and intuitive design.',
    ],
    imageSrc: './img/mycrypto1.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://tiny-sfogliatella-1f3791.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/My-crypto',
  },
  // Project 2
  {
    name: 'Worl Vista',
    description: [
      'World Vista, the JavaScript Capstone project, is an extensive and enlightening web application that serves as an invaluable resource for exploring information on approximately 250 countries around the world. This impressive project offers a comprehensive look into the diverse cultures, economies, geographies, and demographics of nations spanning the globe.',
    ],
    imageSrc: './img/worldvista.png',
    technologies: ['JavaScript', 'CSS', 'Bootstrap', 'Html'],
    liveDemo: 'https://gregarious-cupcake-5d65a2.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/World-vistas',
  },
  // Project 3
  {
    name: 'Leaderboard',
    description: [
      'Leaderboard is a web page that saves your score and name online. Developed using HTML, CSS, JavaScript, Git flow, and API, it provides a platform to store and display user scores.',
    ],
    imageSrc: './img/leader-board.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najiblearderboard.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/Leaderboard',
  },

  // Project 4
  {
    name: 'BudgetPro',
    description: [
      'BudgetPro, the Ruby on Rails capstone project, involves building a mobile web application for efficient budget management. Users can track transactions associated with specific categories to visualize their spending habits and monitor their budget.',
    ],
    imageSrc: 'img/budgetpro.png',
    technologies: ['Ruby', 'Rails', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://railsbudgetapp-3bf39d51a2ed.herokuapp.com',
    sourceLink: 'https://github.com/najibullahjafari/BudgetPro',
  },

  // Project 4
  {
    name: 'Todo List',
    description: [
      'To-do list is a simple and effective tool used to organize tasks and manage time efficiently. It serves as a personal task manager, helping users keep track of their daily, weekly, or long-term tasks and goals.',
    ],
    imageSrc: 'img/todolist.png',
    technologies: ['JavaScript', 'HTML', 'Bootstrap', 'CSS3'],
    liveDemo: 'https://gleaming-rabanadas-7c9e4b.netlify.app/',
    sourceLink: 'https://github.com/najibullahjafari/To-do-list',
  },
  {
    name: 'Gharb Online Store',
    description: [
      'Gharb Online Shopping is  a complete MIS system which customer can buy products, The admin can add new products, categories and etc..',
    ],
    imageSrc: 'img/onlinestoreimage/first.jpeg',
    technologies: ['Laravel', 'JavaScript', 'Bootstrap', 'CSS3'],
    liveDemo: '#',
    sourceLink: '#',
  },
  {
    name: 'Kabul University Dormitory',
    description: [
      'Kabul University Dormitory Project is a real world project that is developed to automate the process of selecting suitable student in Dormitory.',
    ],
    imageSrc: 'img/dormitory_project/1.jpg',
    technologies: ['Laravel', 'Livewire', 'Tailwindcss', 'CSS3'],
    liveDemo: '#',
    sourceLink: '#',
  },
];

const projectBtns = document.querySelectorAll('.btn-project');

// ====================== VALIDATION ==============

/* ****************
 * EVENT LISTENERS *
 **************/
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

    // Set the live demo link
    const liveDemoLink = popup.querySelector('.p-live-demo');
    liveDemoLink.href = currentProject.liveDemo;

    // Set the source link
    const sourceLink = popup.querySelector('.sourcelink');
    if (currentProject.sourceLink) {
      sourceLink.href = currentProject.sourceLink;
      sourceLink.style.display = 'inline';
    } else {
      sourceLink.style.display = 'none';
    }

    // Set the image source based on the current project
    const primaryImage = popup.querySelector('.p-primary-image');
    if (Array.isArray(currentProject.imageSrc)) {
      primaryImage.src = currentProject.imageSrc[0]; // Set the first image initially
      const imageContainer = popup.querySelector('.p-image-container');
      imageContainer.innerHTML = ''; // Clear existing images

      currentProject.imageSrc.forEach((src, index) => {
        if (index > 0) {
          // Skip the first image as it's already set
          const img = document.createElement('img');
          img.className = 'p-secondary-image';
          img.src = src;
          imageContainer.appendChild(img);
        }
      });
    } else {
      primaryImage.src = currentProject.imageSrc;
    }
    primaryImage.src = currentProject.imageSrc;

    event.preventDefault();
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.classList.add('hide-scroll');
  });
}

// =============== save data ===================

const nameInput = document.getElementById('firstname');
const emailInput = document.getElementById('email');
const textInput = document.querySelector('textarea');

function saveToStorage() {
  const saveData = {
    name: nameInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(saveData));
}

nameInput.addEventListener('input', saveToStorage);
emailInput.addEventListener('input', saveToStorage);
textInput.addEventListener('input', saveToStorage);

document.addEventListener('DOMContentLoaded', () => {
  const dataSaved = localStorage.getItem('contactFormData');
  if (dataSaved) {
    const data = JSON.parse(dataSaved);
    nameInput.value = data.name;
    emailInput.value = data.email;
    textInput.value = data.text;
  }
});
/////////////// updae hover effects //////////////////
