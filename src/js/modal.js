//launching and closing modal

const body = document.querySelector("body");
const exampleModal = document.querySelector("#example-modal");
const openModalButton = document.querySelector("#btn-open-example-modal");
const closeModalIcon = document.querySelector("#icon-modal-close-example");
const closeModalButton = document.querySelector("#btn-modal-close-example");

openModalButton.addEventListener("click", () => { 
    exampleModal.style.display = "flex";
    body.style.overflow = "hidden" ;
});
const closeModal = () => {
    exampleModal.style.display = "none";
    body.style.overflow = "auto";
};
closeModalIcon.addEventListener("click", closeModal);
closeModalButton.addEventListener("click", closeModal);
