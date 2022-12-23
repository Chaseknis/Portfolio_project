const header = document.querySelector('header');
header.style.borderBottom = 'solid 0.5px #6070ff';

const img = document.getElementById('hamburger_menu');
const menu = document.querySelector('.nav_menu');
const specs = document.querySelectorAll('.nav_item');

function toggleNav() {
  if (img.src.match('images/Union.png')) {
    img.src = 'images/Normal Button/Tertiary/Icons/Icon.png';
    menu.classList.toggle('active');
  } else {
    img.src = 'images/Union.png';
    menu.classList.toggle('active');
  }
}
function closeMenu() {
  menu.classList.toggle('active');
  img.src = 'images/Union.png';
}
img.addEventListener('click', toggleNav);
specs.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

const modalContainer = document.querySelector('#pop_up_window');

const projects = [
  {
    id: 'first_project',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/card_img_1.svg',
    alt: 'card image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExpanded: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    caption: 'A daily selection of privately personalized reads; accounts or sign-ups required.',
    tools: ['html', 'css', 'javascript'],
    toolsTwo: ['github', 'ruby', 'Bootstraps'],
    submitButton: 'work-section-button',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'second_project',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/card_img_2.svg',
    alt: 'card image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExpanded: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    caption: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tools: ['html', 'css', 'javascript'],
    toolsTwo: ['github', 'ruby', 'Bootstraps'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'third_project',
    name: 'Tonic',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/card_img_3.svg',
    alt: 'card image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExpanded: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    caption: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tools: ['html', 'css', 'javascript'],
    toolsTwo: ['github', 'ruby', 'Bootstraps'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'fourth_project',
    name: 'Multi-Post Stories',
    background: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
    image: 'images/card_img_4.svg',
    alt: 'card image',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionExpanded: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    caption: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tools: ['html', 'css', 'javascript'],
    toolsTwo: ['github', 'ruby', 'Bootstraps'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function getToolsTemplate(tools) {
  let toolsContent = '';

  tools.forEach((tool) => {
    toolsContent += `
      <li>${tool}</li>
    `;
  });

  return toolsContent;
}

function popUpModal(project) {
  const modalContent = `
  <div class="pop_up_blur_effect"></div>
  
  <div class="pop_up_container">

    <div class="pop_up_body">

      <div class="pop-up-header">
        <h2>${project.name}</h2>
        <img id="pop-up-close-button" src="images/Normal Button/Tertiary/Icons/Icon-Cancel.png"/>
      </div>

      <div class="pop-up-sub-header">
        <div class="list_wrapper">
          <ul>
            <li class="canopy">${project.background}</li>
            <li class="back_end">${project.stack}</li>
            <li class="year">${project.year}</li>
          </ul>
        </div>

      </div>

      <div class="pop-up-body">
        <div class="modal-img-wrapper">
            <img id="pop-up-image-cover" src="${project.image}" alt="${project.alt}"/>
        </div>

        <div class="pop-up-body-contents">
          <p class="mobile_paragraph">${project.description}</p>
          <p class="desktop_paragraph">${project.descriptionExpanded}</p>

          <div class="pop-up-details">

            <div class="programing_languages_list">
              <ul>
                ${getToolsTemplate(project.tools)}
              </ul>
              <ul>
                ${getToolsTemplate(project.toolsTwo)}
              </>
            </div>

            <hr/>

            <div class="pop-up-button-wrapper">
              <button class="pop_up_button">
                <span>
                  See live
                </span> 

                <img src="images/Icon-Export.png"/>
              </button>

              <button class="pop_up_button github_button">
                <span>
                  See Source
                </span> 

                <img src="images/Icon-GitHub.png"/>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>`;

  return modalContent;
}

function loadProjectCards(projects = []) {
  let projectContents = '';

  projects.forEach((project) => {
    projectContents += `
    <div class="card_container">
      <div class="img_wrapper">
        <img src="${project.image}" alt="${project.alt}"/>
      </div>

      <div class="details_wrapper">

        <h2>${project.name}</h2>

        <div class="list_wrapper">
          <ul>
            <li class="canopy">${project.background}</li>
            <li class="back_end">${project.stack}</li>
            <li class="year">${project.year}</li>
          </ul>
        </div>

        <p>
          ${project.caption}
        </p>

        <div class="programing_languages_list">
          <ul>
            ${getToolsTemplate(project.tools)}
          </ul>
        </div>

        <div class="button_wrapper">
          <button data-project-id="${project.id}" id="see-project-button">

            See project

          </button>

        </div>

      </div>

    </div>`;
  });

  return projectContents;
}

function closePopUp() {
  modalContainer.style.display = 'none';
}

function openPopUp(project) {
  const popUpTemplate = popUpModal(project);
  modalContainer.innerHTML = popUpTemplate;
  modalContainer.style.display = 'block';

  const popUpCloseButton = document.querySelector('#pop-up-close-button');

  popUpCloseButton.addEventListener('click', closePopUp);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#work');
  modalContainer.style.display = 'none';

  portfolioSection.innerHTML = loadProjectCards(projects);

  const projectButtons = document.querySelectorAll('#see-project-button');

  Array.from(projectButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('data-project-id');
      const projectObj = projects.find((project) => project.id === projectID);

      openPopUp(projectObj);
    });
  });
});
