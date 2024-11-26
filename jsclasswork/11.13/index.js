const cars = [
    {
        brand: 'Mercedes',
        model: 'SLR McLaren',
        imgUrl: './photos/Mercedes-Benz_SLR_McLaren_(8615973055)_(cropped).jpg',
        price: 120000,
        year: 2006,
        transmissionType: 'automatic'
    },{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 100000,
        year: 2020,
        transmissionType: 'automatic'
    },{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 10000,
        year: 2020,
        transmissionType: 'automatic'
    },,{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 150000,
        year: 2020,
        transmissionType: 'automatic'
    },{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 300000,
        year: 2020,
        transmissionType: 'automatic'
    }
    ,{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 340000,
        year: 2020,
        transmissionType: 'automatic'
    },{
        brand: 'Mercedes',
        model: 'AMG GT',
        imgUrl: 'photos/images.jpeg',
        price: 300000,
        year: 2020,
        transmissionType: 'automatic'
    }
];

const filterByPriceLabel = document.querySelector('[for=filterByPrice]');
const filterByPriceInput = document.getElementById('filterByPrice');
const sortUp = document.querySelector('.sortUp');
const sortDown = document.querySelector('.sortDown');

const addCar = () => {
    const inputs = document.querySelectorAll('input[name]');
    const select = document.querySelector('select');
    
    const car = {};
    
    for(const inp of inputs) {
        car[inp.name] = inp.value
    }
    cars.push(car)

    console.log(cars);
}

const render = data => {
    const carsHtml = data.map(car => `
        <div class="card" style="width: 18rem;">
            <img src="${car.imgUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.model}</h5>
                <div class="car-color"></div>
                <p class="card-text car-price">price: ${car.price}</p>
                <p class="card-text car-year">year: ${car.year}</p>
                <p class=" card-textcar-transmission">transmission: ${car.transmissionType}</p>
                <a href="#" class="btn btn-primary">Buy</a>
            </div>
        </div>
        `).join('')
    const wrap = document.getElementById('wrap').innerHTML = carsHtml
}

render(cars)

filterByPriceInput.addEventListener('input', e => {
    filterByPriceLabel.innerHTML = `${e.target.value} $`;

    const filterdCars = cars.filter(car => parseInt(car.price) <= parseInt(e.target.value));

    render(filterdCars)
})

sortUp.addEventListener('click', () => {
    cars.sort(a,b => a.price - b.price)

    render(cars)
})

sortDown.addEventListener('click', () => {
    cars.sort(a,b => b.price - a.price)

    render(cars)
})

