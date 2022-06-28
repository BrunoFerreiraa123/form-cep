import { checkName, checkCep } from './modules/regexInputs.js';
import { errorName, errorCep } from './modules/printError.js';
import { clearMsgError } from './modules/printError.js';

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
    
    if (checkName() === false) {
        errorName()
    } else if (checkCep() === false) {
        errorCep()
    }
    return (checkName() === true && checkCep() === true) ? true : false;
        
}