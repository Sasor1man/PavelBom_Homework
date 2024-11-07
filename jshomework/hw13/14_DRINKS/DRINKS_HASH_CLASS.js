class HashStorageClass {
    constructor(drinkStorage) {
        this.drinkStorage = [{
            title: 'test',
            alcohol: true,
            recipe: 'test1 add test2'
        }, {
            title: 'test2',
            alcohol: false,
            recipe: 'test41 add test32'
        }];
    }

    setDrink = (_name, _alc, _recipe) => this.drinkStorage.push({ title: _name, alcohol: _alc, recipe: _recipe });

    infoDrink = drinkName => this.drinkStorage.find(drink => drink.title === drinkName);

    deleteDrink = (drinkName) => {
        const index = this.drinkStorage.findIndex(drink => drink.title === drinkName);
        return (index !== -1) ? this.drinkStorage.splice(index, 1) : false;
    }

    getDrinks = () => this.drinkStorage;

}