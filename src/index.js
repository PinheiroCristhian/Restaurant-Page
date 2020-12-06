import renderHomePage from './modules/createHome.js';
import renderMenu from './modules/createMenu.js';
import renderContact from './modules/createContact.js';


function generateNav() {

  const contentDiv = document.querySelector('.content');

  contentDiv.appendChild(createDiv()).id = 'bg-img';
  
  document.querySelector('#bg-img').appendChild(createDiv()).id = 'bg-color';

  document.querySelector('#bg-color').appendChild(createNavBar()).id = 'nav-bar';
  document.querySelector('#nav-bar').appendChild(createUl());
  
  for (let i = 1; i <= 3; i++) {
    document.querySelector('#nav-bar ul').appendChild(createLi());
  }

  for (let li of document.querySelectorAll('li')) {
    li.appendChild(createA())
  }

  document.querySelectorAll('#nav-bar ul li a')[0].textContent = 'Home';
  document.querySelectorAll('#nav-bar ul li a')[1].textContent = 'Menu';
  document.querySelectorAll('#nav-bar ul li a')[2].textContent = 'Contact';
  
}
generateNav();

function createNavBar() {
  return document.createElement('nav');
}

function createDiv() {
  return document.createElement('div');
}

function createUl() {
  return document.createElement('ul');
}

function createLi() {
  return document.createElement('li');
}

function createA() {
  return document.createElement('a');
}

function switchTab() {

  const homePageTab = document.querySelector('#restaurant-info');
  const menuTab = document.querySelector('#menu');
  const contactsTab = document.querySelector('#contacts');
  const switchBtns = document.querySelectorAll('a');

  switchBtns.forEach(btns => {
    
    btns.addEventListener('click', () => {
      if (btns.textContent === 'Home') {
        homePageTab.classList.add('display');
        menuTab.classList.remove('display');
        contactsTab.classList.remove('display');
      } else if (btns.textContent === 'Menu') {
        menuTab.classList.add('display');
        homePageTab.classList.remove('display');
        contactsTab.classList.remove('display');
        homePageTab.style.display = 'none';
      } else {
        contactsTab.classList.add('display');
        homePageTab.classList.remove('display');
        menuTab.classList.remove('display');
        homePageTab.style.display = 'none';
      }

    });
  });
  return switchBtns;

}
renderHomePage()
renderMenu();
renderContact();


switchTab();