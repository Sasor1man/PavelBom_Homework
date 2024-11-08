const buildWrapper = tag => (text, atribute) => {
    if (Array.isArray(text) && text.length <= 2 && typeof (text[0]) === 'string' && typeof (text[1]) === 'object') {
        atribute = text[1];
        text = text[0];
    }

    if (typeof (tag) !== 'string' || typeof (text) !== 'string') return 0;
    const symbolsUni = {
        '&': '&amp',
        '<': '&lt',
        '>': '&gt',
        '"': '&quot',
        "'": '&apos',
    };
    const symbols = `&<>'"`;
    const toUnicode = symbol => `${symbolsUni[symbol]};`;
    const translateString = str => Array.from(str).map((curLetter) => symbols.includes(curLetter) ? toUnicode(curLetter) : curLetter).join('');
    const atributeString = atribute => {
        let result = '';
        for (let key in atribute) {
            result += ` ${key}='${atribute[key]}'`
        }
        return result
    }
    for (let key in atribute) {
        atribute[key] = translateString(atribute[key])
    }
    return `<${tag}${atributeString(atribute)}>${translateString(text)}</${tag}>`
}

const wrapP = buildWrapper('P');
const wrapH1 = buildWrapper('H1');

