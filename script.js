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

  <section class="section-work " id="projectSection">
    <div class="work-public-oontainer">
      <div class="template1">
        <div class="work-container">
          <h2 class="work-h2 ">My Recent Works</h2>
          <span class="line"><span />
        </div>
        <div class="work-first-card">
          <div class="work-yoga-img">
            <img src="image/ImgPlaceholder.png" alt="multiple-Post illistration" class="multiple-post-header-img">
          </div>
          <div class="work-first-text ">
            <h3 class="work-genral-header-first genral-font">Multiple-Post Stories</h3>
            <p class="multiple-post-description-first">
              A daily selection of privately personalized reads; no accounts or sign-ups required. has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
            </p>
            <ul class="work-lanaguage ">
              <li class="work-first-lang"><span>CSS</span></li>
              <li class="work-first-lang"><span>HTML</span></li>
              <li class="work-first-lang"><span>Bootstrap</span></li>
              <li class="work-first-lang"><span>Ruby</span></li>
            </ul>
            <button class="button-action-first btn-project " id="overlayButton">See project</d></button>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="panel-container first-panel">
          <div class="panel-mobile-content1 ">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con lang-panel1">
            <li class="work-lang-box"><span>HTML</span></li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class=" button-action btn-project" id="overlayButton">See project</a>
        </div>
        <div class="panel-container second-panel">
          <div class="panel-mobile-content">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con ">
            <li class="work-lang-box">
              <spab>HTML</spab>
            </li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class="button-action btn-project" id="overlayButton">See project</a>
        </div>
        <div class="panel-container tirth-panel ">
          <div class="panel-mobile-content">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con flex">
            <li class="work-lang-box"><span>HTML</span></li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class="button-action btn-project" id="overlayButton">See project</a>
        </div>
        <div class="panel-container fourth-panel">
          <div class="panel-mobile-content">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con flex">
            <li class="work-lang-box"><span>HTML</span></li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class="button-action btn-project" id="overlayButton">See project</a>
        </div>
        <div class="panel-container fifth-panel">
          <div class="panel-mobile-content">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con flex">
            <li class="work-lang-box"><span>HTML</span></li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class="button-action btn-project" id="overlayButton">See project</a>
        </div>
        <div class="panel-container sixth-panel">
          <div class="panel-mobile-content">
            <h3 class="work-genral-header genral-font">Profesional Art Printing Data</h3>
            <p class="multiple-post-description">A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.</p>
          </div>
          <ul class="card-language-con flex">
            <li class="work-lang-box"><span>HTML</span></li>
            <li class="work-lang-box"><span>Bootstrap</span></li>
            <li class="work-lang-box"><span>Ruby</span></li>
          </ul>
          <a href="#" class="button-action btn-project" id="overlayButton">See project</a>
        </div>
      </div>
    </div>
  </section>`;
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
    name: 'Multi Post Stories #1',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: '',
  },
  // Project 2
  {
    name: 'Multi Post Stories #1',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: '',
  },
  // Project 3
  {
    name: 'Multi Post Stories #3',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
  // Project 4
  {
    name: 'Multi Post Stories #4',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
  // Project 5
  {
    name: 'Multi Post Stories #5',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
  // Project 6
  {
    name: 'Multi Post Stories #6',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
  // Project 7
  {
    name: 'Multi Post Stories #7',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!',
    ],
    imageSrc: './img/close-btn.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    liveDemo: 'https://najibullahjafari.github.io/',
    sourceLink: 'https://github.com/najibullahjafari/Portfolio',
  },
];

const projectBtns = document.querySelectorAll('.btn-project');

// ====================== VALIDATION ==============

document
    .getElementById("contact-form-container")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        let emailInput = document.getElementById("email");
        let errormessege = document.getElementById("errormessage");
        if (emailInput.value.toLowerCase() != emailInput.value) {
            errormessege.textContent = "Email should be in lowercase!";
            if (!emailInput) {
                console.log("the input form should not be empty");
            }
        } else {
            errormessege.textContent = " ";
            this.submit;
        }
    });

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

for (let i = 0; i <= projectBtns.length; i += 1) {
  const currentProject = allProjectInfo[i];
  projectBtns[i].addEventListener('click', event => {
    heading.innerHTML = '';
    techContainer.innerHTML = '';
    tech.innerHTML = '';
    descBox.innerHTML = '';
    description.innerHTML = '';
    heading.textContent = currentProject.name;

    for (let k = 0; k < currentProject.technologies.length; k += 1) {
      const curTech = document.createElement('li');
      curTech.className = 'p-tech-item';
      curTech.textContent = currentProject.technologies[k];
      techContainer.append(curTech);
    }

    for (let k = 0; k < currentProject.description.length; k += 1) {
      const curDesc = document.createElement('p');
      curDesc.className = 'p-description';
      curDesc.textContent = currentProject.description[k];
      descBox.append(curDesc);
    }
    event.preventDefault();
    popUp.classList.remove('hidden');
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