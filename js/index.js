const register = document.querySelector('.registration');
const closerRegister = document.querySelector('.closerRegister')
const registerLink = document.querySelector('.register')

registerLink.addEventListener('click', () =>  {
    register.style.display = "flex";
});
closerRegister.addEventListener("click", ()=>{
    register.style.display = "none";
})

const loginer = document.querySelector(".loginer");
const login = document.querySelector(".login");
const closerLogin = document.querySelector(".closerLogin")

loginer.addEventListener("click", () => {
    login.style.display = "flex";
})
closerLogin.addEventListener("click", ()=>{
    login.style.display = "none";
})