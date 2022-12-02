const openable = document.querySelector('.openable');
const checkout1 = document.querySelector('.checkout1');
const closer = document.querySelector('.closer');

checkout1.addEventListener('click', () =>{
    openable.style.display = "flex";
    photo1.style.display = "block";
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
const checkout11 = document.querySelector('.checkout11');
const checkout12 = document.querySelector('.checkout12');
const closePage = document.querySelector('.closePage');

checkout2.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall2.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N802";
    photo1.style.display = "block";
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
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall3.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N803";
    photo1.style.display = "block";
})

checkout4.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall4.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N804";
    photo1.style.display = "block";
})
checkout5.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall5.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N805";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout6.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall6.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N806";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout7.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/wall/wall7.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N807";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
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
})
const bar = document.getElementById("bar");
const headerMiddle = document.querySelector(".header-middle");
const closeMiniBar = document.getElementById("closer");

bar.addEventListener('click',() =>{
    headerMiddle.style.display = "flex";
});
closeMiniBar.addEventListener('click',() => {
    headerMiddle.style.display = "none";
})