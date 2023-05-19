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

// for popup button //

const overlayButton = document.querySelectorAll('overlayButton');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');
const projectName = document.getElementById('projectName');
const projectImage = document.getElementById('projectImage');
const projectDescription = document.getElementById('projectDescription');
const projectTechnologies = document.getElementById('projectTechnologies');
const liveLink = document.getElementById('liveLink');
const sourceLink = document.getElementById('sourceLink');
const projectsSection = document.getElementById('projectsSection');

const pforcomputer = [
  {
    title: 't',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Data DashboardHealthcare',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Website Portfolio ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Profesional Art Printing Data More',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Data DashboardHealthcare',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Website Portfolio ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. \
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
];

const pformobile = [
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Project 1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'image/imagecom.png',
    technologies: 'HTML, CSS, JavaScript',
    liveLink: '#',
    sourceLink: '#'
  },
];

projects.forEach(pforcomputer => {
  const card = document.createElement('div');
  card.classList.add('projectCard');
  card.innerHTML = `
    <h3>${project.name}</h3>
    <img src="${project.image}" alt="${project.name}">
    <button class="detailsButton">View Details</button>
  `;
  projectsSection.appendChild(card);
});

const detailsButtons = document.querySelectorAll('.detailsButton');
detailsButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    openOverlay(index);
  });
});

function openOverlay(index) {
  const project = projects[index];
  projectName.textContent = project.name;
  projectImage.src = project.image;
  projectDescription.textContent = project.description;
  projectTechnologies.textContent = `Technologies: ${project.technologies}`;
  liveLink.href = project.liveLink;
  sourceLink.href = project.sourceLink;
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto'; 
});
