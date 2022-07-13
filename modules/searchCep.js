import { errorCep, clearMsgCep } from './printError.js'

const fillForm = (endereco) => {
    document.getElementById('street').value = endereco.logradouro;
    document.getElementById('city').value = endereco.localidade;
    document.getElementById('district').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;
}

const searchCep = async () => {
    clearMsgCep();
    let cep = document.getElementById('cep').value;
    cep = cep.replace(/ /g, "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

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