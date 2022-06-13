const msgName = document.getElementById('paragraph-name')
const msgCep = document.getElementById('paragraph-cep')

function errorName() {
    msgName.innerText = "Nome inválido"
}

function errorCep() {
    msgCep.innerText += "Cep inválido"
}

function clearMsgError() {
    msgName.innerText = "";
    msgCep.innerText = "";
}

export { errorName, errorCep, clearMsgError }