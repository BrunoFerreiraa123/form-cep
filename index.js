import {checkName, checkCep} from './modules/regexInputs.js';
import {clearMsgError} from './modules/printError.js'

const submit = document.getElementById('button');

submit.addEventListener('click', evt => {
    evt.preventDefault();
    clearMsgError()

    checkForm()
})

function checkForm () {
    checkName();
    checkCep();
}