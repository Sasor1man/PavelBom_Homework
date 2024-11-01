function Countries() {

    const self = this;

    const dataBase = {};

    self.setCountry = function (country, capital) {
        dataBase[country] = capital;
    }

    self.getCountries = function () {
        console.log('Countries', dataBase);
    }

    self.update = function (deletedCountry, newCountry, newCapital) {
        delete dataBase[deletedCountry];
        dataBase[newCountry] = newCapital;
    }

    self.deletedCountries = function (country) {
        delete dataBase[country];
    }
}

const countrues = new Countries();

function addCountry() {
    const country = prompt('country');
    const capital = prompt('capital');

    countrues.setCountry(country, capital);
}

function showCountries() {
    const countriesData = countrues.getCountries();
    let result ='';

    for(let country in countriesData){
        result+=`Country: ${country} - capital: ${countriesData[country]} \n`;
    }

    alert(result);
}

function deleteCountry() {
    const country = prompt('enter country');

    countrues.deletedCountries(country);
}

function updateCountry() {
    const country = prompt('country');
    const newCapital = prompt('capital');
    const newCountry = prompt('updated country');

    countrues.updateCountry(country, newCountry, newCapital);
}