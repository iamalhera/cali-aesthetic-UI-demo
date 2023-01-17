// login form validation

const loginForm = document.querySelector("#example-login-form");
loginForm.addEventListener("submit", (e)=>{
    const emailElement = document.querySelector("#email-example");
    const passwordElement = document.querySelector("#password-example");
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");

    emailError.style.display = emailElement.value && emailElement.value.includes("@") ?  "none" : "block";
    passwordError.style.display = passwordElement.value && passwordElement.value.length >= 8 ?  "none" : "block";
    e.preventDefault();
});

