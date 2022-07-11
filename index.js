import { checkCep, checkNum } from './modules/regexInputs.js';
import { errorCep, errorNum, clearMsgError } from './modules/printError.js';

const button = document.getElementById('button');
const form = document.getElementById('form');

button.addEventListener('click', e => {
    e.preventDefault();

    clearMsgError()
    if(checkForm() === true && checkNum() === true){
        form.submit();
        alert("Formulário Enviado com sucesso! :D")
    }
})

function checkForm() {
    if (checkCep() === false) {
        errorCep()
    }
    if(checkNum() === false) {
        errorNum() 
    }
    return (checkCep() === true) ? true : false;      
}