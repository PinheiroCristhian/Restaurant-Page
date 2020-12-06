function renderMenu() {

  const bgColor = document.querySelector('#bg-color');

  bgColor.appendChild(createDiv()).id = 'menu';
  document.querySelector('#menu').classList.add('clearfix')


  document.querySelector('#menu').appendChild(createH2()).textContent = 'MENU';

  for (let i = 1; i <= 4; i++) {
    document.querySelector('#menu').appendChild(createDiv()).classList.add('food');
  }
  
  
  document.querySelectorAll('.food')[0].appendChild(createImg());
  document.querySelectorAll('img')[0].src = './images/fried-chicken.jpg';
  document.querySelectorAll('.food')[0].appendChild(createP()).innerHTML = 'Fried Chicken <span class="food-price">$39.00</span>';
  
  document.querySelectorAll('.food')[1].appendChild(createImg());
  document.querySelectorAll('img')[1].src = './images/fried-fish.jpg'
  document.querySelectorAll('.food')[1].appendChild(createP()).innerHTML = 'Fried Fish <span class="food-price">$29.00</span>';

  document.querySelectorAll('.food')[2].appendChild(createImg());
  document.querySelectorAll('img')[2].src = './images/shrimp.jpg'
  document.querySelectorAll('.food')[2].appendChild(createP()).innerHTML = 'Shrimp <span class="food-price">$41.00</span>';

  document.querySelectorAll('.food')[3].appendChild(createImg());
  document.querySelectorAll('img')[3].src = './images/vegetable-salad.jpg'
  document.querySelectorAll('.food')[3].appendChild(createP()).innerHTML = 'Vegetable Salad <span class="food-price">$19.00</span>';

  
  
}



function createImg() {
  return document.createElement('img');
}

function createH2() {
  return document.createElement('h2');
}

function createP() {
  return document.createElement('p');
}

function createDiv() {
  return document.createElement('div');
}


export default renderMenu;