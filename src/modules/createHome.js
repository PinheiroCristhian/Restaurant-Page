import DOM from './dom.js';
function renderHomePage() {
  
  const contentDiv = document.querySelector('.content');

  contentDiv.appendChild(createDiv()).id = 'bg-img-home';
  
  document.querySelector('#bg-img-home').appendChild(createDiv()).id = 'bg-color';

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
  

  document.querySelector('#bg-color').appendChild(createDiv()).id = 'restaurant-info';
  document.querySelector('#restaurant-info').appendChild(createH1());
  document.querySelector('#restaurant-info').appendChild(createP());
  
  document.querySelector('#restaurant-info').style.cssText = 'margin: 10% auto; width: 50%'
  

  document.querySelector('#restaurant-info h1').textContent = 'The Odin Restaurant';
  document.querySelector('#restaurant-info h1').style.cssText = 'color: #fff; margin-bottom: 50px; text-align: center; font-size: 52px';


  document.querySelector('#restaurant-info p').textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vitae fuga enim repellat molestiae, porro tenetur non distinctio, exercitationem similique nobis. Ducimus, ut eum. Dolorem assumenda cupiditate accusantium facilis totam.';
  document.querySelector('#restaurant-info p').style.color = '#fff';
  
  document.querySelector('#restaurant-info p').style.cssText = 'line-height: 1.9; font-size: 25px; color: #fff';
  

}

function createH1() {
  return document.createElement('h1');
}

function createP() {
  return document.createElement('p');
}

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


export default renderHomePage;