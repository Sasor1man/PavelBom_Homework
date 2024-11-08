const vowelsForEach = str => {
    if (typeof (str) !== 'string') return 0;
    let rusVowels = 'уеыаоэяию';
    let num = 0;
    rusVowels += rusVowels.toUpperCase();
    Array.from(str).forEach(letter => { if (rusVowels.includes(letter)) num++ })
    return num
}
const vowelsReduce = str => {
    if (typeof (str) !== 'string') return 0;
    let rusVowels = 'уеыаоэяию';
    rusVowels += rusVowels.toUpperCase();
    return Array.from(str).reduce((accum, cur) => rusVowels.includes(cur) ? accum += 1 : accum, 0)
}
const vowelsFilter = str => {
    if (typeof (str) !== 'string') return 0;
    let rusVowels = 'уеыаоэяию';
    rusVowels += rusVowels.toUpperCase();
    return Array.from(str).filter(letter => rusVowels.includes(letter)).length
}