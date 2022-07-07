import searchCep from './validateCep.js';

const cep = document.getElementById('cep');

let condicional = Boolean;

function checkCep() {
    const reg = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/g;
    let cepValue = cep.value;

    condicional = cepValue.match(reg) !== null ? true : false;

    if(condicional === true) searchCep();

    return (condicional === true) ? true : false;
}


export default checkCep