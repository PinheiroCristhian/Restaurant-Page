function renderContact() {


  document.querySelector('#bg-color').appendChild(createDiv()).id = 'contacts';
  document.querySelector('#contacts').appendChild(createDiv()).id = 'bg-color-contacts';


  document.querySelector('#bg-color-contacts').appendChild(createP()).id = 'phone-number';
  document.querySelector('#phone-number').textContent = 'tel: 0000 000-0000';
  document.querySelector('#bg-color-contacts').appendChild(createP()).id = 'email';
  document.querySelector('#email').textContent = 'Email: theodinrestaurant@odin.com';

}

function createP() {
  return document.createElement('p');
}

function createDiv() {
  return document.createElement('div');
}

export default renderContact;