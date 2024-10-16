const isPol = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === )
    }
    if (str.length % 2) {
        for (let i = 0; i < str.length / 2; i++) {

            if (str[i] !== str[(str.length - i)]) return false;
        }
        return true
    }


}

console.log(isPol('aaa'))