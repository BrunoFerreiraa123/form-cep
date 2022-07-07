import checkCep from './modules/regexInputs.js';
import { errorCep, clearMsgError } from './modules/printError.js';

const button = document.getElementById('button');
const form = document.getElementById('form');

button.addEventListener('click', e => {
    e.preventDefault();

    clearMsgError()
    if(checkForm()){
        form.submit();
        alert("Formulário Enviado com sucesso! :D")
    }
})

function checkForm() {
    
    if (checkCep() === false) {
        errorCep()
    }
    return (checkCep() === true) ? true : false;
        
}