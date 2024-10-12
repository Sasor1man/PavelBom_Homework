function treeSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return sum = 'error: input is not array'
    }
    for (let i = 0; i < arr.length; i++) {
        // typeof (arr[i]) === "number" ? sum += arr[i] : sum += treeSum(arr[i]);
        switch (true) {
            case typeof (arr[i]) === "number": sum += arr[i]; break;
            case Array.isArray(arr[i]): sum += treeSum(arr[i]); break;
        }
    }
    return sum
}

function test(testArr) {
    for (let i = 0; i < testArr.length; i++) {
        treeSum(testArr[i].array) === testArr[i].expect ? console.log(`object №${i + 1} good`) : console.log(`object №${i + 1} error`)
    }
}

let aa; // undefined
const b = null;

const arrays = [
    {
        array:
            [5, 7,
                [4, [2], 8, [1, 3], 2],
                [9, []],
                1, 8
            ],
        expect: 50
    },
    {
        array: [5, [4, [8, 6, [4, [[], []]], 41], 5, [2], 0, 55]],
        expect: 130
    },
    {
        array: [],
        expect: 0
    },
    {
        array: ['sos', 101, { a: 102 }, aa, b],
        expect: 101
    },
    {
        array: 0,
        expect: 'error: input is not array'
    },
    {
        array: ['str', aa, b, { a: 102 }],
        expect: 0
    }
]

test(arrays);

