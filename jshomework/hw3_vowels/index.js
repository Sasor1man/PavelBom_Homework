const vowels = word => {
    if (typeof(word) !== 'string') return 0;
    let rusVowels = 'уеыаоэяию';
    let num = 0;
    rusVowels += rusVowels.toUpperCase();
    for (let i = 0; i < word.length; i++) {
        if (rusVowels.includes(word[i])) num++;
    }
    return num
}