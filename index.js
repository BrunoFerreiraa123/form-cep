import checkName from './modules/regexInputs.js';

const submit = document.getElementById('button');

submit.addEventListener('click', evt => {
    evt.preventDefault();

    checkForm()
})

function checkForm () {

    if (checkName()) {
        return console.log('ok')
    } else {
        return console.log('error name')
    }

}