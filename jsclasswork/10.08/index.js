let x = null;
let y = null;
let sign;

function checkForNumber(word) {
    if (Number(word) == word) {
        return true;
    } else return false;
}

function getValue(classArr) {
    for (let i = 0; i < classArr.length; i++) {
        classArr[i].onclick = function () {
            (checkForNumber(classArr[i].value)) ? rememberNum(classArr[i].value) : getSign(classArr[i].value)
        }
    }
}

function rememberNum(value) {
    value = Number(value)
    if (x === null) {
        x = value;
    } else y = value;
}

function getSign(_sign) {
    return sign = _sign;
}

function getResult() {
    switch (sign) {
        case '+': console.log(x + y); break;
        case '-': console.log(x - y); break;
        case '*': console.log(x * y); break;
        case '/': console.log(x / y); break;
    }
    x = null;
    y = null;
    sign = null;
}


const numbers = document.getElementsByClassName('number');
const operation = document.getElementsByClassName('operation');
const result = document.getElementById('result').onclick = () => getResult();


getValue(numbers);
getValue(operation);
