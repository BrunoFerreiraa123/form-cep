import { errorCep, clearMsgError } from './printError.js'

const fillForm = (endereco) => {
    document.getElementById('street').value = endereco.logradouro;
    document.getElementById('city').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

const searchCep = async () => {
    clearMsgError();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        errorCep();
    } else {
        fillForm(endereco)
    }
}

document.getElementById('cep')
    .addEventListener("focusout", searchCep);

export default searchCep;