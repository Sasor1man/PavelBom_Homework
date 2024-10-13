const address = {
    street: 'gorovca',
    city: 'Minsk',
    zipCode: '2200'
};

const showAddress = address => {
    for (key in address) { // почему работает без let key
        console.log(`${key} - ${address[key]}`)
    }
};

showAddress(address);