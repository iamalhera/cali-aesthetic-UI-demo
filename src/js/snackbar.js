const snackbar = document.querySelector(".snackbar")
const btnSnackbar = document.querySelector("#btn-snackbar")

btnSnackbar.addEventListener('click', () => {
    snackbar.style.display ="block";
    
    setTimeout(() => {
        snackbar.style.display ="none";
    }, 3000)
})