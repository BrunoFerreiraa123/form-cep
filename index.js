import {checkName, checkCep} from './modules/regexInputs.js';

const submit = document.getElementById('button');

submit.addEventListener('click', evt => {
    evt.preventDefault();

    checkForm()
})

function checkForm () {

    if (checkName() === false) return errorName;
    if (checkName() === false) return errorCep;
    

}