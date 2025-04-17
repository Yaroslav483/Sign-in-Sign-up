let eye = document.querySelector(".eye");
let inputPass = document.querySelector(".pass");

eye.addEventListener("click", function() {
    if (inputPass.type === "password") {
        inputPass.type = "text";
        eye.src = "https://cdn-icons-png.flaticon.com/128/8925/8925699.png";
    } else {
        inputPass.type = "password";
        eye.src = "https://cdn-icons-png.flaticon.com/128/98/98494.png";
    }
});

let info = {}
let emailInput = document.querySelector("#email")
let passInput = document.querySelector(".pass")

emailInput.addEventListener("input", function() {
    info.email = this.value
});

passInput.addEventListener("input", function(){
    info.pass = this.value
});


const emailLog = document.querySelector("#email")
const passLog = document.querySelector(".pass")
const button = document.querySelector(".back-info")

button.addEventListener("click", function(){
    console.log(emailLog.value)
    console.log(passLog.value)
});
