function renderContact() {

  const contentDiv = document.querySelector('.content');

  contentDiv.appendChild(createDiv()).id = 'bg-img-contact';
  
  document.querySelector('#bg-img-contact').appendChild(createDiv()).id = 'bg-color';

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


  document.querySelector('#bg-color').appendChild(createDiv()).id = 'contacts';
  document.querySelector('#contacts').appendChild(createDiv()).id = 'bg-color-contacts';
  document.querySelector('#bg-color-contacts').appendChild(createP()).id = 'phone-number';
  document.querySelector('#phone-number').textContent = 'tel: 0000 000-0000';
  document.querySelector('#bg-color-contacts').appendChild(createP()).id = 'email';
  document.querySelector('#email').textContent = 'Email: theodinrestaurant@odin.com';

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
export default renderContact;