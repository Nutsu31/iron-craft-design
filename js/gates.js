const openable = document.querySelector('.openable');
const checkout1 = document.querySelector('.checkout1');
const closer = document.querySelector('.closer');

checkout1.addEventListener('click', () =>{
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})
closer.addEventListener('click',()=> {
    openable.style.display = "none";
})

const checkoutComplete = document.querySelector('.checkoutComplete');
const closerCheckout = document.querySelector('.closerCheckout')
let button = document.querySelector('.button');
const photo1 = document.querySelector('.photo1');

button.addEventListener('click', () =>{
    checkoutComplete.style.display = "flex";
    photo1.style.display = "none";
});

const checkout2 = document.querySelector('.checkout2');
const checkout3 = document.querySelector('.checkout3');
const checkout4 = document.querySelector('.checkout4');
const checkout5 = document.querySelector('.checkout5');
const checkout6 = document.querySelector('.checkout6');
const checkout7 = document.querySelector('.checkout7');
const checkout8 = document.querySelector('.checkout8');
const checkout9 = document.querySelector('.checkout9');
const checkout10 = document.querySelector('.checkout10');
const closePage = document.querySelector('.closePage');

checkout2.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate2.png";
    document.getElementById('doorNumber').innerHTML = "Door #N502";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})

closerCheckout.addEventListener('click',()=> {
    checkoutComplete.style.display = "none"
    openable.style.display = "none";
    
})
closePage.addEventListener('click', () => {
    checkoutComplete.style.display = "none"
    openable.style.display = "none";
})

checkout3.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate3.png";
    document.getElementById('doorNumber').innerHTML = "Door #N603";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})

checkout4.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate4.png";
    document.getElementById('doorNumber').innerHTML = "Door #N604";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})
checkout5.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate5.png";
    document.getElementById('doorNumber').innerHTML = "Door #N605";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})
checkout6.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate6.png";
    document.getElementById('doorNumber').innerHTML = "Door #N606";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})
checkout7.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate7.png";
    document.getElementById('doorNumber').innerHTML = "Door #N607";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})
checkout8.addEventListener('click', ()=> {
    document.getElementById('changeModels').src = "./img/models/gates/gate8.png";
    document.getElementById('doorNumber').innerHTML = "Door #N608";
    openable.style.display = "flex";
    openable.style.position = "fixed";
    photo1.style.display = "block";
    openable.style.transform = `translate(${0}%)`;
})

const dropDown = document.querySelector('.dropDown');
const space = document.querySelector('.space');
const xCloser = document.querySelector('.xCloser')

dropDown.addEventListener('click', () => {
    space.style.display = 'flex';
    xCloser.style.display = 'block'
});

xCloser.addEventListener('click', () => {
    space.style.display = 'none';
    xCloser.style.display = 'none';
});

const bar = document.getElementById("bar");
const headerMiddle = document.querySelector(".header-middle");
const closeMiniBar = document.getElementById("closer");

bar.addEventListener('click',() =>{
    headerMiddle.style.display = "flex";
});
closeMiniBar.addEventListener('click',() => {
    headerMiddle.style.display = "none";
})