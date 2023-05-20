/* **************** *
 * GENERAL VARIABLES *
 ****************** */
const pCloseBtn = document.querySelector(".p-cross-btn");
const popUp = document.querySelector(".section-popup");
const body = document.querySelector("body");
const overlay = document.querySelector('.overlay2');

// THERE IS SCRIPT FOR POP UP MENU

const hiddenMenu = document.querySelector('.hidden-menu');
const hamburguer = document.querySelector('#hamburguer-menu');
const colseTag = document.querySelector('.cancel-img');
const portfolioItem = document.querySelectorAll('.hidden-item');

hamburguer.addEventListener('click', function(){
    hiddenMenu.style.display = 'flex';
    }
);
colseTag.addEventListener('click', function(){
    hiddenMenu.style.display = 'none';
    }
);
portfolioItem.forEach((element) => {
  element.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
  });
});

pCloseBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
        overlay.classList.add('hidden');
        body.classList.remove('hide-scroll');
});
// =============== save data ===================

const nameInput = document.getElementById('firstname');
const emailInput = document.getElementById('email');
const lastInput = document.getElementById('lastname');
const textInput = document.querySelector('textarea');

function saveToStorage() {
  const saveData = {
    name: nameInput.value,
    lastname: lastInput.value,
    email: emailInput.value,
    text: textInput.value,
  };

  localStorage.setItem('contactFormData', JSON.stringify(saveData));
}

nameInput.addEventListener('input', saveToStorage);
emailInput.addEventListener('input', saveToStorage);
lastInput.addEventListener('input', saveToStorage);
textInput.addEventListener('input', saveToStorage);

document.addEventListener('DOMContentLoaded', () => {
  const dataSaved = localStorage.getItem('contactFormData');
  if (dataSaved) {
    const data = JSON.parse(dataSaved);
    nameInput.value = data.name;
    lastInput.value = data.lastname;
    emailInput.value = data.email;
    textInput.value = data.text;
  }
});


// ====================== cards objext ================

const pforcomputer = [
  {
    panalId: '0',
    image: 'image/ImgPlaceholder.png',
    title: 'Multiple-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '1',
    image: 'image/ImgPlaceholder1.png',
    title: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '2',
    image: 'image/ImgPlaceholder2.png',
    title: 'Website Portfolio ',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '3',
    image: 'image/ImgPlaceholder3.png',
    title: 'Profesional Art Printing Data More',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '4',
    image: 'image/Img1.png',
    title: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '5',
    image: 'image/ImgPlaceholder2.png',
    title: 'Website Portfolio ',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    panalId: '6',
    image: 'image/ImgPlaceholder3.png',
    title: 'Website Portfolio ',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
    shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: '<li class="work-first-lang"><a href="#">HTML</a></li><li class="work-first-lang"><a href="#">CSS</a></li><li class="work-first-lang"><a href="#">Bootstrap</a></li><li class="work-first-lang"><a href="#">Ruby</a></li>',
    liveLink: '#',
    sourceLink: '#'
  }
];

const panal1 = (data) => {
  return `
      <div class="work-header-box">
        <h2 class="work-header genral-font">My Recent Works</h2>
        <div class="line"></div>
    </div>
    <div class="multiple-post-panel">
			<div class="panel-img-box">
					<img
							src="${data.image}"
							alt="multiple-Post illistration"
							class="multiple-post-header-img"
					/>
			</div>
			<div class="panel-text-box">
					<h3 class="multiple-post-genral genral-font">
							${data.title}
					</h3>
					<p class="multiple-post-description">
							${data.description}
					</p>
					<ul class="tags-box flex">
							${data.technologies}
						</ul>
					<a
							href="#"
							class="button-action button-action-first btn-project"
							> See project</a
			</div>
    </div>
  `
};

const panal2 = (data, i) => {
  return `<div class="panel panel__${i} flex">
						<div class="panel-container">
								<div class="panel-mobile-content">
										<h3 class="panel-genral">
												${data.title}
										</h3>
										<p class="panel-description">
												${data.description}
										</p>
								</div>
								<div class="panel-desktop-content">
										<h3 class="panel-genral">
												${data.title}
										</h3>
										<p class="panel-description">
												${data.description}
										</p>
								</div>
								<ul class="tags-box flex">
										${data.technologies}
								</ul>
								<a
										href="#"
										id="overlay"
										class="button-action btn-project"
										>See project</a
								>
						</div>
					</div>
  `
};

const workCon = document.querySelector('.work-container');
const cardCon = document.createElement('div');
cardCon.className = 'card-container';

pforcomputer.forEach((data, i) => {
  if (i === 0) {
    workCon.innerHTML += panal1(data, i);
  } else {
    // workCon.append(cardCon);
    workCon.innerHTML += panal2(data, i);
  }
});

const allProjectInfo = [
    // Project 1
    {
        name: "Multi Post Stories #1",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "",
    },
    // Project 2
    {
        name: "Multi Post Stories #1",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "",
    },
    // Project 3
    {
        name: "Multi Post Stories #3",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "https://github.com/najibullahjafari/Portfolio",
    },
    // Project 4
    {
        name: "Multi Post Stories #4",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "https://github.com/najibullahjafari/Portfolio",
    },
    // Project 5
    {
        name: "Multi Post Stories #5",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "https://github.com/najibullahjafari/Portfolio",
    },
    // Project 6
    {
        name: "Multi Post Stories #6",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "https://github.com/najibullahjafari/Portfolio",
    },
    // Project 7
    {
        name: "Multi Post Stories #7",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos neque deleniti maxime delectus voluptate laboriosam reprehenderit ipsa quam quaerat facere harum perspiciatis a suscipit eligendi omnis, nam ab. Aliquid!",
        ],
        imageSrc: "./img/close-btn.png",
        technologies: ["HTML", "CSS", "Bootstrap", "Ruby on Rails"],
        liveDemo: "https://najibullahjafari.github.io/",
        sourceLink: "https://github.com/najibullahjafari/Portfolio",
    },
];

const projectBtns = document.querySelectorAll(".btn-project");

// ====================== VALIDATION ==============

document.getElementById('contact-form').addEventListener("submit", function(e){
  e.preventDefault();
  let emailInput  = document.getElementById('email');
  let errormessege = document.getElementById('errormessage');
  if (emailInput.value.toLowerCase() != emailInput.value){
    errormessege.textContent = "Email should be in lowercase!"
  if (!emailInput) {
    console.log('the input form should not be empty')
  }
  } else {
    errormessege.textContent = " ";
    this.submit;
  }
});

/* ****************
 * POP UP VARIABLES *
 *************** */
const heading = document.querySelector(".p-heading-primary");
const techContainer = document.querySelector(".p-tech-box");
const tech = document.querySelector(".p-tech-item");
const descBox = document.querySelector(".p-description-box");
const description = document.querySelector(".p-description");

/* ****************
 * EVENT LISTENERS *
 *************** */

for (let i = 0; i <= projectBtns.length; i += 1) {
    const currentProject = allProjectInfo[i];
    projectBtns[i].addEventListener("click", (event) => {
        heading.innerHTML = "";
        techContainer.innerHTML = "";
        tech.innerHTML = "";
        descBox.innerHTML = "";
        description.innerHTML = "";
        heading.textContent = currentProject.name;

        for (let k = 0; k < currentProject.technologies.length; k += 1) {
            const curTech = document.createElement("li");
            curTech.className = "p-tech-item";
            curTech.textContent = currentProject.technologies[k];
            techContainer.append(curTech);
        }

        for (let k = 0; k < currentProject.description.length; k += 1) {
            const curDesc = document.createElement("p");
            curDesc.className = "p-description";
            curDesc.textContent = currentProject.description[k];
            descBox.append(curDesc);
        }
        event.preventDefault();
        popUp.classList.remove("hidden");
        overlay.classList.remove('hidden');
        body.classList.add('hide-scroll');
    });
}

const btnpopup = document.querySelector('btn--popup');
btnpopup.addEventListener('click', function(){
    window.open("https://najibullahjafari.github.io/");
});

// ========= HERE IS THE PART FOR FORM VALIDATION ==========
