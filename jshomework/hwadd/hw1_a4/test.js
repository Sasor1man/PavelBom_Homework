
function test(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        isPol(testArr[i].value) === testArr[i].expect ? console.log(`example №${i + 1} good`) : console.log(`example №${i + 1} error`)
    }
}

let aa; // undefined
const b = null;

const testValues = [
    {
        value: 'abcd',
        expect: false
    },
    {
        value: 'АбвгеЕ',
        expect: false
    },
    {
        value: ' ',
        expect: 0
    },
    {
        value: ['sos', 101, { a: 102 }, aa, b],
        expect: 0
    },
    {
        value: '--aaa',
        expect: true
    },
    {
        value: 'ъьъьь',
        expect: true
    },
    {
        value: 'aAa',
        expect: true
    },
    {
        value: '   aaaaaa    ',
        expect: true
    },
    {
        value: 'ееёёееёё',
        expect: true
    }
]

console.log(test(testValues));