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
    document.getElementById('changeModels').src = "./img/models/staircase/stair2.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N702";
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
    document.getElementById('changeModels').src = "./img/models/staircase/stair3.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N703";
    photo1.style.display = "block";
})

checkout4.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair4.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N704";
    photo1.style.display = "block";
})
checkout5.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair5.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N705";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout6.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair6.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N706";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout7.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair7.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N707";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout8.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair8.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N708";
    openable.style.transform = `translateY(${20}vw)`;
    photo1.style.display = "block";
})
checkout9.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair9.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N709";
    openable.style.transform = `translateY(${46}vw)`;
        photo1.style.display = "block";
})
checkout10.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair10.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N710";
    openable.style.transform = `translateY(${46}vw)`;
        photo1.style.display = "block";
})
checkout11.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/stair11.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N711";
    openable.style.transform = `translateY(${46}vw)`;
    photo1.style.display = "block";
})
checkout12.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/staircase/outdoorbalcony.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N712";
    openable.style.transform = `translateY(${46}vw)`;
    photo1.style.display = "block";
})