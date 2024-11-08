function testP(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        wrapP(testArr[i].value) === testArr[i].expect ? console.log(`example №${i + 1} good`) : console.log(`example №${i + 1} error`)
    }
}
function testH1(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        wrapH1(testArr[i].value) === testArr[i].expect ? console.log(`example №${i + 1} good`) : console.log(`example №${i + 1} error`)
    }
}

let aa; // undefined
const b = null;

const testValuesforP = [
    {
        value: "Однажды в студёную зимнюю пору",
        expect: "<P>Однажды в студёную зимнюю пору</P>"
    },
    {
        value: "Вкусные M&M's",
        expect: "<P>Вкусные M&amp;M&apos;s</P>"
    },
    {
        value: ["Однажды в студёную зимнюю пору", { lang: "ru" }],
        expect: "<P lang='ru'>Однажды в студёную зимнюю пору</P>"
    },
    {
        value: ["Однажды в студёную зимнюю пору", {}],
        expect: "<P>Однажды в студёную зимнюю пору</P>"
    },
    {
        value: "Однажды в <студёную> зимнюю пору",
        expect: "<P>Однажды в &lt;студёную&gt; зимнюю пору</P>"
    },
    {
        value: 1234,
        expect: 0
    },
    {
        value: aa,
        expect: 0
    },
    {
        value: b,
        expect: 0
    },
    {
        value: ['sos', 101, { a: 102 }, aa, b],
        expect: 0
    },
    {
        value: ['sos', { a: 102 }, 101, aa, b],
        expect: 0
    }
]

const testValuesforH1 = [
    {
        value: "СТИХИ",
        expect: "<H1>СТИХИ</H1>"
    },
    {
        value: ["СТИХИ", { align: "center", title: "M&M's" }],
        expect: "<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"
    },
    {
        value: 1234,
        expect: 0
    },
    {
        value: aa,
        expect: 0
    },
    {
        value: b,
        expect: 0
    },
    {
        value: ['sos', 101, { a: 102 }, aa, b],
        expect: 0
    },
    {
        value: ['sos', { a: 102 }, 101, aa, b],
        expect: 0
    }
]

console.log('WrapP test')
console.log(testP(testValuesforP));
console.log('WrapH1 test')
console.log(testH1(testValuesforH1));
