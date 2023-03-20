//Haz tú validación en javascript acá
import { validaciones } from "./assets/js/validaciones.js";

const formulario = document.querySelector("[data-form]");

validaciones.validateInputs();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-name]").value;
    const email = document.querySelector("[data-email]").value;
    const asunto = document.querySelector("[data-subject]").value;
    const mensaje = document.querySelector("[data-message]").value;
    validaciones.sendMessage(nombre,email,asunto,mensaje);
});