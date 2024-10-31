const returnCentury = year => {
    return Math.ceil(year / 100)
}

console.log(returnCentury(2000));
console.log(returnCentury(2001));
console.log(returnCentury(1980));
console.log(returnCentury(1));