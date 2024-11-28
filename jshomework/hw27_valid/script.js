const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const isEmpty = value => !(value === '')

const checkUrl = value => {
    const reg = /^[a-z0-9]+(\.[a-z0-9]+)+$/i;
    return reg.test(value)
}

const checkMail = value => {
    const reg = /\w+\@\w+\.[a-z]+/i;
    return reg.test(value)
}

const checkText = tag => {
    switch (tag.name) {
        case 'siteUrl': return checkUrl(tag.value);
        case 'mail': return checkMail(tag.value);
        default: return isEmpty(tag.value)
    }
}

const dateCompare = (today, checkingDay) => {
    if (today.getFullYear() >= checkingDay.getFullYear()) {
        if (today.getMonth() >= checkingDay.getMonth()) {
            if (today.getDay() >= checkingDay.getDay()) {
                return false
            }
        }
    }
    return true
}

const checkDate = date => {
    const arrayDate = date.split('-');
    const now = new Date();
    const currectDate = new Date(parseInt(arrayDate[0]), parseInt(arrayDate[1]) - 1, parseInt(arrayDate[2]));
    return dateCompare(now, currectDate)
}

const checkInput = input => {
    switch (input.type) {
        case 'text': return checkText(input);
        case 'number': return isEmpty(input.value);
        case 'date': return checkDate(input.value);
        default: return isEmpty(input.value)
    }
}

const addEvent = input => {
    const blurFunc = e => {
        const element = e.target;
        checkInput(element) ? element.classList.add("correct") : element.classList.add("incorrect");
        element.removeEventListener('blur', blurFunc);
    }
    input.addEventListener('focus', e => {
        const element = e.target;
        element.classList.remove('correct', 'incorrect');
        element.addEventListener('blur', blurFunc)
    });
}

const checkCorrect = () => {
    let a = 0;
    inputs.forEach(e => {
        if (!checkInput(e)) {
            if (!e.classList.contains('incorrect')) e.classList.add("incorrect");
            a++;
        }
    })
    if (!checkInput(textarea)) {
        if (!textarea.classList.contains('incorrect')) textarea.classList.add("incorrect");
        a++;
    }
    return a
}

const pseudoSubmit = e => {
    if (checkCorrect()) e.preventDefault();
}

inputs.forEach(e => addEvent(e));

addEvent(textarea);

button.addEventListener('click', pseudoSubmit)






