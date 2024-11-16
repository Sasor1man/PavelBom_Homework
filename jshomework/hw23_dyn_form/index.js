const formDef1 =
    [
        { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
        { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
        { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
        { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
        {
            label: 'Рубрика каталога:', kind: 'combo', name: 'division',
            variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
        },
        {
            label: 'Размещение:', kind: 'radio', name: 'payment',
            variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
        },
        { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
        { label: 'Описание сайта:', kind: 'memo', name: 'description' },
        { caption: 'Опубликовать', kind: 'submit' },
    ];

const formDef2 =
    [
        { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
        { label: 'Имя:', kind: 'longtext', name: 'firstname' },
        { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
        { label: 'Возраст:', kind: 'number', name: 'age' },
        { caption: 'Зарегистрироваться', kind: 'submit' },
    ];

const createLongTextInput = tag => {
    const longText = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = tag.label;
    input.name = tag.name;
    input.type = 'text';

    longText.appendChild(label);
    longText.appendChild(input);

    return longText
}

const createNumberInput = tag => {
    const num = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = tag.label;
    input.name = tag.name;
    input.type = 'number';

    num.appendChild(label);
    num.appendChild(input);

    return num
}

const createShortTextInput = tag => {
    const shortText = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = `${tag.label}`;
    input.name = tag.name;
    input.type = 'text';
    input.maxLength = 60;

    shortText.appendChild(label);
    shortText.appendChild(input);

    return shortText
}

const createSelect = tag => {
    const selectDiv = document.createElement('div');
    const select = document.createElement('select');
    const label = document.createElement('label');

    label.innerText = tag.label;

    tag.variants.forEach(element => {
        const option = document.createElement('option');
        option.value = element.value;
        option.innerText = element.text;
        return select.appendChild(option);
    });

    selectDiv.appendChild(label)
    selectDiv.appendChild(select)

    return selectDiv
}

const createRadio = tag => {
    const radioDiv = document.createElement('div');
    const label = document.createElement('label');

    label.innerText = tag.label;
    radioDiv.appendChild(label);

    tag.variants.forEach(element => {
        const radioLabel = document.createElement('label');
        const radio = document.createElement('input');
        const radioDiv2 = document.createElement('div');

        radio.type = 'radio';
        radio.name = tag.name;
        radio.value = element.value;

        radioLabel.innerText = element.text;

        radioDiv2.append(radio);
        radioDiv2.append(radioLabel);

        radioDiv.appendChild(radioDiv2);
    });

    return radioDiv;
}


const createCheckbox = tag => {
    const checkDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = tag.label;
    checkbox.name = tag.name;
    checkbox.type = 'checkbox';

    checkDiv.appendChild(label);
    checkDiv.appendChild(checkbox);
    checkDiv.className = 'check'

    return checkDiv
}

const createSubmit = tag => {
    const button = document.createElement('button');

    button.innerText = tag.caption;

    return button
}

const createTextarea = tag => {
    const areaDiv = document.createElement('div');
    const label = document.createElement('label');
    const area = document.createElement('textarea');

    area.name = tag.name;
    label.innerText = tag.label;

    areaDiv.appendChild(label);
    areaDiv.appendChild(area);
    areaDiv.className = 'text-area'

    return areaDiv
}

const checkTag = tagObj => {
    switch (tagObj.kind) {
        case 'longtext': return createLongTextInput(tagObj)
        case 'number': return createNumberInput(tagObj)
        case 'shorttext': return createShortTextInput(tagObj)
        case 'combo': return createSelect(tagObj)
        case 'check': return createCheckbox(tagObj)
        case 'radio': return createRadio(tagObj)
        case 'submit': return createSubmit(tagObj)
        case 'memo': return createTextarea(tagObj)
    }
}

const createForm = arr => {
    const form = document.createElement('form');
    form.action = 'https://fe.it-academy.by/TestForm.php';

    arr.forEach(input => form.appendChild(checkTag(input)));

    return document.body.appendChild(form)
}

createForm(formDef1)
createForm(formDef2)

