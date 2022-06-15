import { checkName, checkCep } from './modules/regexInputs.js';
import { clearMsgError } from './modules/printError.js';
import pesquisaCep from './modules/validateCep.js';


document.getElementById('button')
    .addEventListener('click', evt => {
        evt.preventDefault();
        clearMsgError()

        checkForm()
    })

function checkForm() {
    
    checkName();

    if (checkCep()) {
        pesquisaCep();
    }
}