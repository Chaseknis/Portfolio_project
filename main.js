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

