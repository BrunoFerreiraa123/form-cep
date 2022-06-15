import { errorCep, clearMsgError } from './printError.js'

const preencherFormulario = (endereco) => {
    document.getElementById('street').value = endereco.logradouro;
    document.getElementById('city').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

const pesquisaCep = async () => {
    clearMsgError();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        errorCep();
    } else {
        preencherFormulario(endereco)
    }
}

document.getElementById('cep')
    .addEventListener("focusout", pesquisaCep);

export default pesquisaCep;