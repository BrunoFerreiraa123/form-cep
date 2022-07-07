const msgCep = document.getElementById('paragraph-cep')

function errorCep() {
    msgCep.innerText += "Cep inválido"
}

function clearMsgError() {
    msgCep.innerText = "";
}

export { errorCep, clearMsgError }