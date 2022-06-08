const name = document.getElementById('name');


function checkName() {
    const reg = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    let nameValue = name.value;

    return nameValue.match(reg) !== null ? true : false;
}


export default checkName