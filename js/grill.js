const openable = document.querySelector(".openable");
const checkout1 = document.querySelector(".checkout1");
const closer = document.querySelector(".closer");

checkout1.addEventListener("click", (e) => {
  e.preventDefault();
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

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkoutComplete.style.display = "flex";
  photo1.style.display = "none";
});

const checkout2 = document.querySelector(".checkout2");

checkout2.addEventListener("click", (e) => {
  e.preventDefault();
  openable.style.display = "flex";
  openable.style.position = "fixed";
  photo1.style.display = "block";
  openable.style.transform = `translate(${0}%)`;
  document.getElementById("changeModels").src = "./img/models/grill/grill2.png";
  document.getElementById("doorNumber").innerHTML = "Grill #N1102";
});
const closePage = document.querySelector(".closePage");

closerCheckout.addEventListener("click", () => {
  checkoutComplete.style.display = "none";
  openable.style.display = "none";
});
closePage.addEventListener("click", () => {
  checkoutComplete.style.display = "none";
  openable.style.display = "none";
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
