import { checkCep, checkNum } from './modules/validateInputs.js';
import { errorCep, errorNum, clearMsgCep, clearMsgNum } from './modules/printError.js';

const button = document.getElementById('button');
const form = document.getElementById('form');

button.addEventListener('click', e => {
    e.preventDefault();
    clearMsgCep();
    clearMsgNum();

    if (checkForm()) {
        form.submit();
        alert("Formulário Enviado com sucesso! :D")
    }
})

function checkForm() {
    if (!checkCep()) { errorCep() }
    if (!checkNum()) { errorNum() }

    return ( checkCep() && checkNum() ) ? true : false;
}