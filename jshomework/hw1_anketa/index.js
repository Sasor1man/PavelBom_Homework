function checkForNumber(word) {
    if (word <= 0) return false;
    if (Number(word) == word) {
        return true;
    } else return false;
}

function checkForLetter(word) {
    if (word == '' || word == '.') return false;
    let letter = true;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == Number(word[i])) letter = false;
    }
    if (!letter) return false;
    else return true;
}



var namE = prompt('Введите ваше имя');

while (!checkForLetter(namE)) {
    namE = prompt('Введите корректое имя');
}

var surname = prompt('Введите ваше фамилию');

while (!checkForLetter(surname)) {
    surname = prompt('Введите корректную фамилию')
}

var patronymic = prompt('Введите ваше отчество');
var age = prompt('Введите ваш возраст');


while (!checkForNumber(age)) {
    age = prompt('Введите корректый возраст');
}

var gender = confirm('Ваш пол мужской?');

if (gender) {
    gender = 'мужской';
    if (age > 63) {
        pension = 'да';
    } else {
        pension = 'нет';
    }
} else {
    gender = 'женский';
    if (age > 58) {
        pension = 'да';
    } else {
        pension = 'нет';
    }
}


alert(`ваше ФИО: ${namE} ${surname} ${patronymic} \nваш возраст в годах: ${age} \nваш возраст в днях: ${age * 365} \nчерез 5 лет вам будет: ${parseInt(age) + 5}\nваш пол: ${gender} \nвы на пенсии: ${pension}`);