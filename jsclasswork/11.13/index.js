const cars = [
    {
        brand: 'Mercedes',
        model: 'SLR McLaren',
        imgUrl: './photos/Mercedes-Benz_SLR_McLaren_(8615973055)_(cropped).jpg',
        price: 120000,
        year: 2006,
        transmissionType: 'automatic'
    }, {
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 100000,
        year: 2020,
        transmissionType: 'automatic'
    }, {
        brand: 'Audi',
        model: 'Q7',
        imgUrl: 'photos/q7.jpg',
        price: 45000,
        year: 2017,
        transmissionType: 'automatic'
    }, {
        brand: 'Audi',
        model: 'R8',
        imgUrl: 'photos/r8.jpg',
        price: 55000,
        year: 2008,
        transmissionType: 'robot'
    }, {
        brand: 'Mitsubishi',
        model: 'EVO X',
        imgUrl: 'photos/evox.jpg',
        price: 25000,
        year: 2012,
        transmissionType: 'automatic'
    }, {
        brand: 'Mitsubishi',
        model: 'Xpander',
        imgUrl: 'photos/expander.jpg',
        price: 22000,
        year: 2022,
        transmissionType: 'automatic'
    },
];

const filterByPriceLabel = document.querySelector('[for=filterByPrice]');
const filterByPriceInput = document.getElementById('filterByPrice');
const sortUp = document.querySelector('.sortUp');
const sortDown = document.querySelector('.sortDown');
const sortUpYear = document.getElementById('sortUpYear');
const sortDownYear = document.getElementById('sortDownYear');
const checkboxes = document.querySelectorAll('[type=checkbox]')

let filterdCars = cars;


const addCar = () => {
    const inputs = document.querySelectorAll('input[name]');
    const select = document.querySelector('select');

    const car = {};

    for (const inp of inputs) {
        car[inp.name] = inp.value
    }
    cars.push(car)

    console.log(cars);
}

const addHtml = tag => document.getElementById('wrap').innerHTML = tag

const render = data => {
    const carsHtml = data.map(car => `
        <div class="card" style="width: 18rem;">
            <img src="${car.imgUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.model}</h5>
                <div class="car-color"></div>
                <p class="card-text car-price">price: ${car.price}$</p>
                <p class="card-text car-year">year: ${car.year}</p>
                <p class=" card-textcar-transmission">transmission: ${car.transmissionType}</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `).join('')
    // const wrap = document.getElementById('wrap').innerHTML = carsHtml
    return carsHtml
}

addHtml(render(cars))

sortUp.addEventListener('click', () => {
    filterdCars.sort((a, b) => a.price - b.price)

    addHtml(render(filterdCars))
})

sortDown.addEventListener('click', () => {
    filterdCars.sort((a, b) => b.price - a.price)

    addHtml(render(filterdCars))
})

sortUpYear.addEventListener('click', () => {
    filterdCars.sort((a, b) => a.year - b.year)

    addHtml(render(filterdCars))
})

sortDownYear.addEventListener('click', () => {
    filterdCars.sort((a, b) => b.year - a.year)

    addHtml(render(filterdCars))
})

const checkboxFunc = e => {
    const inputArray = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    filterdCars = cars.filter(car => inputArray.some(input => car[input.name] === input.value));
    addHtml(render(filterdCars));
}

filterByPriceInput.addEventListener('input', e => {
    filterByPriceLabel.innerHTML = `${e.target.value} $`;
    filterdCars = cars.filter(car => parseInt(car.price) <= parseInt(e.target.value));
    addHtml(render(filterdCars))
})
checkboxes.forEach(input => input.addEventListener('click', checkboxFunc))
