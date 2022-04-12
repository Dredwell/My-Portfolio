import { dataProjects } from "./data.js";
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const exitButton = document.getElementById('exit-button');
const navElements = document.querySelectorAll('.nav-elements a');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

exitButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < navElements.length; i += 1) {
  navElements[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}

const projectButtons = document.getElementsByClassName('see-project-button');
const popupWindow = document.getElementById('popup-window');
const closeWindow = document.getElementById('close-icon');

closeWindow.addEventListener('click', () => {
  popupWindow.style.display = 'none';
});

for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    
    const language = () => {
      let str = '';
      for(let j = 0; j < dataProjects[i].tags.length; j += 1){
        str += `<li>${dataProjects[i].tags[j]}</li>`
      }
      return str;
    }
    document.getElementById('popup-project-image').src = dataProjects[i].imgUrl;
    document.getElementById('popup-title').innerHTML = dataProjects[i].projectTitle;
    document.getElementById('languages').innerHTML = language();
    document.getElementById('popup-info').innerHTML = dataProjects[i].text;
    popupWindow.style.top = `${window.scrollY}px`;
    popupWindow.style.display = 'flex';
  });
}