const msgCep = document.getElementById('paragraph-cep');
const msgNum = document.getElementById('paragraph-num');

function errorCep() {
    msgCep.innerText = "Cep inválido"
}

function errorNum() {
    msgNum.innerText = "Insira o número"
}

function clearMsgCep() {
    msgCep.innerText = "";
}

function clearMsgNum() {
    msgNum.innerText = "";
}

export { errorCep, errorNum, clearMsgCep, clearMsgNum }