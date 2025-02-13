import "./styles.css";
import { greeting } from "./home.js";


const email = document.querySelector("#emailInput");
const country = document.querySelector("#countryInput");
const postalCode = document.querySelector("#postalInput");
const password = document.querySelector("#passwordInput");
const passwordConfirm = document.querySelector("#passwordConfInput");

email.addEventListener("input", (e) =>{
    if (email.validity.tymeMismatch) {
        email.setCustomValidity("This is not an email adress!");
    }
    else {
        email.setCustomValidity("");
    }
})

