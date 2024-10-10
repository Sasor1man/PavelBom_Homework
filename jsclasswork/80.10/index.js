let x;
let y;
let sign;

function checkForNumber(word) {
    if (word <= 0) return false;
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
    if (!x) {
        return x = Number(value);
    } else return y = Number(value);
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
