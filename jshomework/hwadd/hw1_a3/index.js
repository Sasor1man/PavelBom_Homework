const deleteSymbols = word => {
    let noSymbolWord = '';
    const symbols = '~ ! @ # $ % ^ & * ( ) _ - + = { } [ ] | \ : ; " \' < > , . ? / § ± « » × ÷ µ ¢ £ ¥ © ® ™ ℅ ℗ №';
    for (let i = 0; i < word.length; i++) {
        if (!symbols.includes(word[i])) noSymbolWord += word[i];
    }
    return (noSymbolWord === '') ? 0 : noSymbolWord.toLowerCase();
}

const equalLetter = (letter1, letter2) => {
    switch (true) {
        case (letter1 === 'е' || letter1 === 'ё') && (letter2 === 'е' || letter2 === 'ё'): return true;
        case (letter1 === 'ь' || letter1 === 'ъ') && (letter2 === 'ъ' || letter2 === 'ь'): return true;
        case letter1 === letter2: return true;
        default: return false;
    }
}

const isPol = (str) => {
    if (typeof (str) !== 'string') return 0;
    str = deleteSymbols(str);
    if (!str) return 0;
    for (let i = 0; i < Math.floor((str.length - 1) / 2); i++) {
        if (!equalLetter(str[i], str[((str.length - 1) - i)])) return false
    }
    return true
}

