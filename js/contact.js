const bar = document.getElementById("bar");
const headerMiddle = document.querySelector(".header-middle");
const closer = document.getElementById("closer");

bar.addEventListener('click',() =>{
    headerMiddle.style.display = "flex";
});
closer.addEventListener('click',() => {
    headerMiddle.style.display = "none";
})
