function renderHomePage() {
  

  document.querySelector('#bg-color').appendChild(createDiv()).id = 'restaurant-info';
  document.querySelector('#restaurant-info').classList.add('active');
  document.querySelector('#restaurant-info').appendChild(createH1());
  document.querySelector('#restaurant-info').appendChild(createP());
  
  document.querySelector('#restaurant-info').style.cssText = 'margin: 5% auto; width: 50%; height: 100vh'
  

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
function createDiv() {
  return document.createElement('div');
}


export default renderHomePage;