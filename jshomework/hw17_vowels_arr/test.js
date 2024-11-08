
function test(testArr) {
    console.log('forEach test')
    for (let i = 0; i < testArr.length; i++) {
        vowelsForEach(testArr[i].value) === testArr[i].expect ? console.log(`object №${i + 1} good`) : console.log(`object №${i + 1} error`)
    }
    console.log('reduce test')
    for (let i = 0; i < testArr.length; i++) {
        vowelsReduce(testArr[i].value) === testArr[i].expect ? console.log(`object №${i + 1} good`) : console.log(`object №${i + 1} error`)
    }
    console.log('filter test')
    for (let i = 0; i < testArr.length; i++) {
        vowelsFilter(testArr[i].value) === testArr[i].expect ? console.log(`object №${i + 1} good`) : console.log(`object №${i + 1} error`)
    }
}

let aa; // undefined
const b = null;

const testValues = [
    {
        value: 'abcd',
        expect: 0
    },
    {
        value: 'АбвгеЕ',
        expect: 3
    },
    {
        value: '',
        expect: 0
    },
    {
        value: ['sos', 101, { a: 102 }, aa, b],
        expect: 0
    },
    {
        value: 0,
        expect: 0
    },
    {
        value: 'аАеЕ  о',
        expect: 5
    }
]

console.log(test(testValues));