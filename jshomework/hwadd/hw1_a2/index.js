const removeSpaceLeft = string => {
    string = string.slice(1);
    return (string[0] === ' ') ? removeSpaceLeft(string) : string

}

const removeSpaceRight = string => {
    string = string.slice(0, -2);
    return (string[-1] === ' ') ? removeSpaceRight(string) : string
}

const removeSpace = (string) => removeSpaceLeft(removeSpaceRight(string))

console.log(removeSpace('        lOl   '));

