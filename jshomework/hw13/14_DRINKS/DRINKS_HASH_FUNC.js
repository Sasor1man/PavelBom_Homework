function DrinksHashFunc() {
    const self = this;
    const drinkStorage = [{
        title: 'test',
        alcohol: true,
        recipe: 'test1 add test2'
    }, {
        title: 'test2',
        alcohol: false,
        recipe: 'test41 add test32'
    }];



    self.setDrink = (_name, _alc, _recipe) => drinkStorage.push({ title: _name, alcohol: _alc, recipe: _recipe });


    self.infoDrink = drinkName => drinkStorage.find(drink => drink.title === drinkName);


    self.deleteDrink = (drinkName) => {
        const index = drinkStorage.findIndex(drink => drink.title === drinkName);
        return (index !== -1) ? drinkStorage.splice(index, 1) : false;
    }

    self.getDrinks = () => drinkStorage;


}
