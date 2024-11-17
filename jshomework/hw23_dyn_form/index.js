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

class Input {
    constructor(tag, type, maxLength, inputType = 'input') {
        if (!type) type = 'text';
        this.tagLabel = tag.label;
        this.tagName = tag.name;
        this.tagType = type;
        if (maxLength) this.maxLength = maxLength;
        this.div = document.createElement('div');
        this.input = document.createElement(inputType);
        this.label = document.createElement('label');
    }


    get divTag() {
        this.label.innerText = this.tagLabel;
        this.input.name = this.tagName;
        if (this.inputType === 'input') this.input.type = this.tagType;
        if (this.maxLength) this.input.maxLength = this.maxLength

        this.div.appendChild(this.label);
        this.div.appendChild(this.input);

        return this.div
    }

}

const createLongTextInput = tag => {
    const longText = new Input(tag);
    return longText.divTag
}

const createNumberInput = tag => {
    const num = new Input(tag, 'number');
    return num.divTag
}

const createShortTextInput = tag => {
    const shortText = new Input(tag, 'text', 20);
    return shortText.divTag
}

const createCheckbox = tag => {
    const checkBox = new Input(tag, 'checkbox');
    const checkDiv = checkBox.divTag;
    checkDiv.className = 'check';
    return checkDiv
}

const createTextarea = tag => {
    const textArea = new Input(tag, '', '', 'textarea');
    const areaDiv = textArea.divTag;
    areaDiv.className = 'text-area';
    return areaDiv
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



const createSubmit = tag => {
    const button = document.createElement('button');

    button.innerText = tag.caption;

    return button
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

