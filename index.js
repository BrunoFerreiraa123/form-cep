import { checkName, checkCep } from './modules/regexInputs.js';
import { clearMsgError } from './modules/printError.js';
import searchCep from './modules/validateCep.js';

document.getElementById('button')
    .addEventListener('click', evt => {
        evt.preventDefault();
        clearMsgError()

        checkForm()
    })
//teste absoluto
function checkForm() {
    
    checkName();

    if (checkCep()) {
        searchCep();
    }
}