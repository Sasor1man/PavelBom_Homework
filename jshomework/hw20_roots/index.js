// находим корни квадратного уравнения
// возвращает массив корней
// ax^2 + bx + c = 0
function squareRoots(a, b, c) {
    switch (true) {
        case (a === 0 && c == 0): return b === 0 ? ['(-inf, +inf)'] : [0];
        case (a === 0 && b == 0): return c === 0 ? ['(-inf, +inf)'] : [];
        case (b === 0 && c == 0): return a === 0 ? ['(-inf, +inf)'] : [0];
        case (a === 0): return [-c / b];
        case (b === 0): return (c < 0) ? ((a < 0) ? [] : [Math.sqrt(-c / a)]) : ((a < 0) ? [Math.sqrt(-c / a)] : []);
        case (c === 0): return [(-b / a), 0]
    }


    const d = b * b - 4 * a * c; // дискриминант

    if (d < 0)
        return []; // нет корней

    if (d == 0)
        return [-b / (2 * a)]; // один корень

    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2]; // два корня
}

function squareRootsTests() {

    {
        console.log('тест 1,1,1 -> нет корней');
        const roots = squareRoots(1, 1, 1);
        console.log((roots.length == 0)
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }

    {
        console.log('тест 1,-2,-3 -> два корня 3,-1');
        const roots = squareRoots(1, -2, -3);
        console.log(((roots.length == 2) && (roots[0] == 3) && (roots[1] == -1))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }

    {
        console.log('тест -1,-2,15 -> два корня -5,3');
        const roots = squareRoots(-1, -2, 15);
        console.log(((roots.length == 2) && (roots[0] == -5) && (roots[1] == 3))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }

    {
        console.log('тест 1,12,36 -> один корень -6');
        const roots = squareRoots(1, 12, 36);
        console.log(((roots.length == 1) && (roots[0] == -6))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }

    {
        console.log('тест 0,5,-10 -> один корень 2');
        const roots = squareRoots(0, 5, -10);
        console.log(((roots.length == 1) && (roots[0] == 2))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }
    {
        console.log('тест 2,0,-8 -> один корень 2');
        const roots = squareRoots(2, 0, -8);
        console.log(((roots.length == 1) && (roots[0] == 2))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }
    {
        console.log('тест 0,0,-8 -> нет корней');
        const roots = squareRoots(0, 0, -8);
        console.log((roots.length == 0)
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }
    {
        console.log('тест 0,0,0 -> infinity');
        const roots = squareRoots(0, 0, 0);
        console.log(((roots.length == 1) && (roots[0] == '(-inf, +inf)'))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }
    {
        console.log('1, 0, -4 -> 2');
        const roots = squareRoots(1, 0, -4);
        console.log(((roots.length == 1) && (roots[0] == 2))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }
    {
        console.log('-1, 0, 4 -> 2');
        const roots = squareRoots(-1, 0, 4);
        console.log(((roots.length == 1) && (roots[0] == 2))
            ? 'пройден' : 'НЕ ПРОЙДЕН!')
    }

}

console.log(squareRootsTests())