function DrinksHashFunc() {
    const self = this;
    const drinkStorage = [{
        title : 'aa',
        alcohol : true
    }];



    self.setDrink = (_name, _alc, _recipe) => {
        drinkStorage.push({title : _name, alcohol : _alc, recipe : _recipe});
    }

    self.infoDrink = (drinkName) => {
        return drinkStorage.find(drinkName => title === drinkName);
            
    }

    self.deleteDrink = (drinkName) => {
        const index = drinkStorage.findIndex(drinkName => title === drinkName);
        return (index !== -1) ? drinkStorage.splice(index, 1) : false;
    }

    self.getDrinks = () => drinkStorage;


}
