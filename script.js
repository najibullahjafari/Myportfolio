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


/* Project section */
const actionbutton = document.querySelector('.button-action');
const section = document.querySelector('.work-section');
const container = document.createElement('div');
actionbutton.addEventListener('click', function(){
  section.innerHTML = ` <div class="pop-con">
        <div class="pop-nav">
          <div class="pop-header">
            <h2>Keeping track of hundreds  of components website</h2>
            <img src="image/cancel.svg" alt="cancel button">
          </div>
          <div class="pop-skils" >
            <li><a>HTML</a></li>
            <li><a>Bootstap</a></li>
            <li><a>Ruby on rails</a></li>
          </div>
        </div>
        <div>
          <div class="pop-img"><img src="image/popuppic.svg" alt="pop picture"></div>
          <div>
            <p class="pop-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
            <div class="pop-buttons">
              <a href="#">See live</a>
              <a href="#">See source</a>
            </div>
          </div>
        </div>
      </div>`;
  section.style.display = 'block';
})
section.appendChild(container);
container.innerHTML = `<!-- ================= POP up details ============== -->
      <div class="pop-con">
        <div class="pop-nav">
          <div class="pop-header">
            <h2>Keeping track of hundreds  of components website</h2>
            <img src="image/cancel.svg" alt="cancel button">
          </div>
          <div class="pop-skils" >
            <li><a>HTML</a></li>
            <li><a>Bootstap</a></li>
            <li><a>Ruby on rails</a></li>
          </div>
        </div>
        <div>
          <div><img src="image/popuppic.svg" alt="pop picture"></div>
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
            <div class="pop-buttons">
              <a href="#">See live</a>
              <a href="#">See source</a>
            </div>
          </div>
        </div>
      </div>`;
      
actionbutton.addEventListener('click', function() {
  section.innerHTML = '';
  const popupHtml = document.querySelector('.pop-nav').parentElement.cloneNode(true);
  section.appendChild(popupHtml);
});




const projects = [
  {
    id: 'main-project-button',
    title: 'Multi-Post Stories',
    image: 'image/ImgPlaceholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn1',
    title: 'Professional Art Printing Data',
    image: 'images/ImgPlaceholder2.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn2',
    title: 'Data Dashboard Healthcare',
    image: 'images/ImgPlaceholder3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn3',
    title: 'Website Portfolio',
    image: 'images/ImgPlaceholder3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn4',
    title: 'Professional Art Printing Data',
    image: 'images/ImgPlaceholder1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari/',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn5',
    title: 'Data Dashboard Healthcare',
    image: 'images/ImgPlaceholder2.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
  {
    id: 'mini-project-btn6',
    title: 'Website Portfolio',
    image: 'images/ImgPlaceholder3.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://najibullahjafari.github.io/najibulllahjafari',
    source_link: 'https://github.com/najibullahjafaari',
  },
];
