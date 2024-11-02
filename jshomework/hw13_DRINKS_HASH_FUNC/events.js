const drinks = new DrinksHashFunc();

const successAppear = () => {
    success.style.display = 'inline-block';
    setTimeout(() => {
        success.style.display = 'none';
    }, 2000);
}

const addDrink = () => {
    const addForm = document.getElementById('AddDrink');
    const nameDrink = addForm[0].value;
    const isAlc = addForm[1].checked;
    const recipe = addForm[3].value;

    drinks.setDrink(nameDrink, isAlc, recipe);

    successAppear();
}

const deleteDrinks = () => {
    const deleteName = document.getElementById("deleteDrink").value;

    drinks.deleteDrink(deleteName);
    successAppear();
}

const findDrink = () => {
    const findName = document.getElementById("findDrink").value;

    console.log(drinks.infoDrink(findName));
}

const listDrink = () => {
    drinks.getDrinks()
}

const addButton = document.getElementById('add').addEventListener('click', addDrink);
const deleteButton = document.getElementById('delete').addEventListener('click', deleteDrinks);
const findButton = document.getElementById('find').addEventListener('click', findDrink);
const listButton = document.getElementById('list').addEventListener('click', listDrink);
const success = document.getElementById("success")
