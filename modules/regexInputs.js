import {errorName, errorCep} from './printError';

const name = document.getElementById('name');
const cep = document.getElementById('cep');

let condicional = Boolean;

function checkName() {
    const reg = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    let nameValue = name.value;

    condicional = nameValue.match(reg) !== null ? true : false;

    if (condicional === false) errorName() 
}

function checkCep() {
    const reg = /^[0-9]{5}-[0-9]{3}$/g;
    let cepValue = cep.value;

    condicional = cepValue.match(reg) !== null ? true : false;

    if (condicional === false) errorCep() 

}


export {checkName, checkCep}