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
    document.getElementById('changeModels').src = "./img/models/tables/table2.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1002";
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
    document.getElementById('changeModels').src = "./img/models/tables/table3.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1003";
    photo1.style.display = "block";
})

checkout4.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table4.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1004";
    photo1.style.display = "block";
})
checkout5.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table5.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1005";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout6.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table6.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1006";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout7.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table7.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1007";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout8.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table8.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1008";
    openable.style.transform = `translateY(${55}vh)`;
    photo1.style.display = "block";
})
checkout9.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table9.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1009";
    openable.style.transform = `translateY(${100}vh)`;
    photo1.style.display = "block";
})
checkout10.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table10.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1010";
    openable.style.transform = `translateY(${100}vh)`;
    photo1.style.display = "block";
})
checkout11.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table11.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1011";
    openable.style.transform = `translateY(${100}vh)`;
    photo1.style.display = "block";
})
checkout12.addEventListener('click', ()=> {
    openable.style.display = "flex";
    document.getElementById('changeModels').src = "./img/models/tables/table12.jpg";
    document.getElementById('doorNumber').innerHTML = "Door #N1012";
    openable.style.transform = `translateY(${100}vh)`;
    photo1.style.display = "block";
})
