import searchCep from './searchCep.js';

const cep = document.getElementById('cep');
const num = document.getElementById('num');

let condicional = Boolean;

function checkCep() {
    const reg = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/g;
    let cepValue = cep.value;

    condicional = cepValue.match(reg) !== null ? true : false;
    if (condicional === true) searchCep();

    return (condicional === true) ? true : false;
}

function checkNum() {
    condicional = (num.value.length <= 0 || isNaN(num.value) === true) ? false : true;

    return (condicional === false) ? false : true;
}

export { checkCep, checkNum }