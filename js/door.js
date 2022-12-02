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
const closePage = document.querySelector('.closePage');

checkout2.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-2.png";
    document.getElementById('doorNumber').innerHTML = "Door #N502";
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
    document.getElementById('changeModels').src = "./img/models/model-3.png";
    document.getElementById('doorNumber').innerHTML = "Door #N503";
    photo1.style.display = "block";
})

checkout4.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-4.png";
    document.getElementById('doorNumber').innerHTML = "Door #N504";
    photo1.style.display = "block";
})
checkout5.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-5.png";
    document.getElementById('doorNumber').innerHTML = "Door #N505";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout6.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-6.png";
    document.getElementById('doorNumber').innerHTML = "Door #N506";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout7.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-7.png";
    document.getElementById('doorNumber').innerHTML = "Door #N507";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout8.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-8.png";
    document.getElementById('doorNumber').innerHTML = "Door #N508";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout9.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-9.png";
    document.getElementById('doorNumber').innerHTML = "Door #N509";
    openable.style.transform = `translateY(${98}vh)`;
    photo1.style.display = "block";
})
checkout10.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/model-10.png";
    document.getElementById('doorNumber').innerHTML = "Door #N510";
    openable.style.transform = `translateY(${98}vh)`;
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