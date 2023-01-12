const openable = document.querySelector(".openable");
const checkout1 = document.querySelector(".checkout1");
const closer = document.querySelector(".closer");

checkout1.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair1.jpg";
  document.getElementById("doorNumber").innerHTML = "Staris #N701";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
closer.addEventListener("click", () => {
  openable.style.display = "none";
});

const checkoutComplete = document.querySelector(".checkoutComplete");
const closerCheckout = document.querySelector(".closerCheckout");
let button = document.querySelector(".button");
const photo1 = document.querySelector(".photo1");

button.addEventListener("click", () => {
  checkoutComplete.style.display = "flex";
  photo1.style.display = "none";
});

const checkout2 = document.querySelector(".checkout2");
const checkout3 = document.querySelector(".checkout3");
const checkout4 = document.querySelector(".checkout4");
const checkout5 = document.querySelector(".checkout5");
const checkout6 = document.querySelector(".checkout6");
const checkout7 = document.querySelector(".checkout7");
const checkout8 = document.querySelector(".checkout8");
const checkout9 = document.querySelector(".checkout9");
const checkout10 = document.querySelector(".checkout10");
const checkout11 = document.querySelector(".checkout11");
const checkout12 = document.querySelector(".checkout12");
const closePage = document.querySelector(".closePage");

checkout2.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair2.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N702";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});

closerCheckout.addEventListener("click", () => {
  checkoutComplete.style.display = "none";
  openable.style.display = "none";
});
closePage.addEventListener("click", () => {
  checkoutComplete.style.display = "none";
  openable.style.display = "none";
});

checkout3.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair3.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N703";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});

checkout4.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair4.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N704";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout5.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair5.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N705";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout6.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair6.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N706";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout7.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair7.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N707";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout8.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair8.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N708";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout9.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair9.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N709";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout10.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair10.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N710";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout11.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/stair11.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N711";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});
checkout12.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("changeModels").src =
    "./img/models/staircase/outdoorbalcony.jpg";
  document.getElementById("doorNumber").innerHTML = "Stairs #N712";
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
});

const dropDown = document.querySelector(".dropDown");
const space = document.querySelector(".space");
const xCloser = document.querySelector(".xCloser");

dropDown.addEventListener("click", () => {
  space.style.display = "flex";
  xCloser.style.display = "block";
});

xCloser.addEventListener("click", () => {
  space.style.display = "none";
  xCloser.style.display = "none";
});

const bar = document.getElementById("bar");
const headerMiddle = document.querySelector(".header-middle");
const closeMiniBar = document.getElementById("closer");

bar.addEventListener("click", () => {
  headerMiddle.style.display = "flex";
});
closeMiniBar.addEventListener("click", () => {
  headerMiddle.style.display = "none";
});
