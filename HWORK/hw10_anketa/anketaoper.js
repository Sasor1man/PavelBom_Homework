var namE = prompt('Введите ваше имя');

while (parseInt(namE) != NaN && namE != toString(namE)) {
    namE = prompt('Введите корректное имя');
    // if (namE === namE.toString) break;
}


var surname = prompt('Введите ваше фамилию');
var patronymic = prompt('Введите ваше отчество');
var age = prompt('Введите ваш возраст');
var gender = confirm('Ваш пол мужской?');

(gender) ? ((age > 63) ? pension = 'да' : pension = 'нет') : ((age > 52) ? pension = 'да' : pension = 'нет');


alert(`ваше ФИО: ${namE} ${surname} ${patronymic} \nваш возраст в годах: ${age} \nваш возраст в днях: ${age * 365} \nчерез 5 лет вам будет: ${parseInt(age) + 5}\nваш пол: ${(gender) ? 'мужской' : 'женский'} \nвы на пенсии: ${pension}`);