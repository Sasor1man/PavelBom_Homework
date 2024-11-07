
function test(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        reverse(testArr[i].value) === testArr[i].expect ? console.log(`example №${i + 1} good`) : console.log(`example №${i + 1} error`)
    }
}

let aa; // undefined
const b = null;

const testValues = [
    {
        value: 'abcd',
        expect: 'dcba'
    },
    {
        value: 'АбвгеЕ',
        expect: 'ЕегвбА'
    },
    {
        value: ' ',
        expect: ' '
    },
    {
        value: ['sos', 101, { a: 102 }, aa, b],
        expect: 0
    },
    {
        value: 1234,
        expect: 0
    },
    {
        value: '  ъьъьь',
        expect: 'ььъьъ  '
    },
    {
        value: 'aAa  ',
        expect: '  aAa'
    },
    {
        value: '   aaaaaa    ',
        expect: '    aaaaaa   '
    },
    {
        value: aa,
        expect: 0
    },
    {
        value: b,
        expect: 0
    }
    ,
    {
        value: '',
        expect: ''
    },
    {
        value: 'a \n b',
        expect: 'b \n a'
    }
]

console.log(test(testValues));