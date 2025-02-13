import "./styles.css";
import { greeting } from "./home.js";


const email = document.querySelector("#emailInput");

email.addEventListener("input", () =>{
    if (email.validity.tymeMismatch) {
        email.setCustomValidity("This is not an email adress!");
    }
    else {
        email.setCustomValidity("");
    }
})


const password = document.querySelector("#passwordInput");


password.addEventListener("input", () =>{
    if (password.validity.tooShort){
        password.setCustomValidity("Password must contain 8 char or more");
    }
    else if (password.validity.tooLong){
        password.setCustomValidity("Password must contain 15 char. or less");
    }
    
    else {
        password.setCustomValidity("");
    }
 })


const passwordConfirm = document.querySelector("#passwordConfInput");

passwordConfirm.addEventListener("input", () =>{
    if (passwordConfirm.validity.tooShort){
        passwordConfirm.setCustomValidity("Password must contain 8 char or more");
    }
    else if (passwordConfirm.validity.tooLong){
        passwordConfirm.setCustomValidity("Password must contain 15 char. or less");
    }
    else {
        passwordConfirm.setCustomValidity("");
    }
 })



const form = document.querySelector("#form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
})
