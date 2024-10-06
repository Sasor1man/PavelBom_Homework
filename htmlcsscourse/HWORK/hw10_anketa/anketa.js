var namE = prompt('Введите ваше имя');
var surname = prompt('Введите ваше фамилию');
var patronymic = prompt('Введите ваше отчество');
var age = prompt('Введите ваш возраст');
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