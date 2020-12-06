function renderMenu() {

  const contentDiv = document.querySelector('.content');

  contentDiv.appendChild(createDiv()).id = 'bg-img-menu';
  
  document.querySelector('#bg-img-menu').appendChild(createDiv()).id = 'bg-color';
  
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


  document.querySelector('#bg-color').appendChild(createDiv()).id = 'menu';
  document.querySelector('#menu').classList.add('clearfix')
  

  document.querySelector('#menu').appendChild(createH2());
  document.querySelector('#menu h2').textContent = 'MENU';

  for (let i = 1; i <= 4; i++) {
    document.querySelector('#menu').appendChild(createDiv()).classList.add('food');
  }
  
  
  document.querySelectorAll('.food')[0].appendChild(createImg());
  document.querySelectorAll('img')[0].src = './../src/images/fried-chicken.jpg'
  document.querySelectorAll('.food')[0].appendChild(createP()).innerHTML = 'Fried Chicken <span class="food-price">$39.00</span>';
  
  document.querySelectorAll('.food')[1].appendChild(createImg());
  document.querySelectorAll('img')[1].src = './../src/images/fried-fish.jpg'
  document.querySelectorAll('.food')[1].appendChild(createP()).innerHTML = 'Fried Fish <span class="food-price">$29.00</span>';

  document.querySelectorAll('.food')[2].appendChild(createImg());
  document.querySelectorAll('img')[2].src = './../src/images/shrimp.jpg'
  document.querySelectorAll('.food')[2].appendChild(createP()).innerHTML = 'Shrimp <span class="food-price">$41.00</span>';

  document.querySelectorAll('.food')[3].appendChild(createImg());
  document.querySelectorAll('img')[3].src = './../src/images/vegetable-salad.jpg'
  document.querySelectorAll('.food')[3].appendChild(createP()).innerHTML = 'Vegetable Salad <span class="food-price">$19.00</span>';
  
  
}



function createImg() {
  return document.createElement('img');
}

function createSpan() {
  return document.createElement('span');
}

function createH2() {
  return document.createElement('h2');
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

export default renderMenu;