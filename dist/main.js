(()=>{"use strict";function e(){return document.createElement("div")}document.createElement("div"),document.createElement("nav"),document.createElement("ul"),document.createElement("li"),document.createElement("a"),function(){document.querySelector(".content").appendChild(e()).id="bg-img-home",document.querySelector("#bg-img-home").appendChild(e()).id="bg-color",document.querySelector("#bg-color").appendChild(document.createElement("nav")).id="nav-bar",document.querySelector("#nav-bar").appendChild(document.createElement("ul"));for(let e=1;e<=3;e++)document.querySelector("#nav-bar ul").appendChild(document.createElement("li"));for(let e of document.querySelectorAll("li"))e.appendChild(document.createElement("a"));document.querySelectorAll("#nav-bar ul li a")[0].textContent="Home",document.querySelectorAll("#nav-bar ul li a")[1].textContent="Menu",document.querySelectorAll("#nav-bar ul li a")[2].textContent="Contact",document.querySelector("#bg-color").appendChild(e()).id="restaurant-info",document.querySelector("#restaurant-info").appendChild(document.createElement("h1")),document.querySelector("#restaurant-info").appendChild(document.createElement("p")),document.querySelector("#restaurant-info").style.cssText="margin: 10% auto; width: 50%",document.querySelector("#restaurant-info h1").textContent="The Odin Restaurant",document.querySelector("#restaurant-info h1").style.cssText="color: #fff; margin-bottom: 50px; text-align: center; font-size: 52px",document.querySelector("#restaurant-info p").textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vitae fuga enim repellat molestiae, porro tenetur non distinctio, exercitationem similique nobis. Ducimus, ut eum. Dolorem assumenda cupiditate accusantium facilis totam.",document.querySelector("#restaurant-info p").style.color="#fff",document.querySelector("#restaurant-info p").style.cssText="line-height: 1.9; font-size: 25px; color: #fff"}()})();