import {errorName, errorCep} from './printError.js';

const name = document.getElementById('name');
const cep = document.getElementById('cep');

let condicional = Boolean;

function checkName() {
    const reg = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/g;
    let nameValue = name.value;

    condicional = nameValue.match(reg) !== null ? true : false;
    //o metodo match retorna null caso o valor do input contenha algum caracter fora da regexp 

    if (condicional === false) errorName();
}

function checkCep() {
    const reg = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/g;
    let cepValue = cep.value;

    condicional = cepValue.match(reg) !== null ? true : false;

    if (condicional === false) errorCep();
}


export {checkName, checkCep}