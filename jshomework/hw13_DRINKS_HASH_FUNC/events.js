const drinks = new DrinksHashFunc();

const successAppear = () => {
    success.style.display = 'inline-block';
    setTimeout(() => {
        success.style.display = 'none';
    }, 2000);
}

const alcoholic = drink => drink.alcohol === true ? 'да' : 'нет';
const noValue = tag => tag.classList.add("red-border");
const removeRed = tag => tag.classList.remove("red-border");
const unfound = div => {
    div.innerHTML = `
        <p>напиток не найден</p>
        `
}
const removeP = div => {
    const p = div.querySelector('p')
    if (p) div.removeChild(p)
}

const addDrink = () => {
    const addForm = document.getElementById('AddDrink');
    const AddDrinkDiv = document.getElementById('AddDrinkDiv');
    const nameDrink = addForm[0].value;
    const nameDrinkInput = addForm[0];
    const isAlc = addForm[1].checked;
    const recipe = addForm[3].value;
    const recipeInput = addForm[3];

    removeP(AddDrinkDiv);
    removeRed(nameDrinkInput);
    removeRed(recipeInput);

    const checkInputs = () => {
        if (nameDrink === '') noValue(nameDrinkInput);
        if (recipe === '') noValue(recipeInput);
        if (nameDrink === '' || recipe === '') return false;
        return true;
    }

    const saveDrink = () => {
        drinks.setDrink(nameDrink, isAlc, recipe);
        successAppear();
    }

    if (checkInputs()) {
        drinks.infoDrink(nameDrink) ? AddDrinkDiv.innerHTML = `<p>Такой напиток уже существует</p>` : saveDrink();
    };

}

const deleteDrinks = () => {
    const deleteName = document.getElementById("deleteDrink").value;
    const deleteInput = document.getElementById("deleteDrink");
    const deleteDiv = document.getElementById("deleteDiv");

    removeRed(deleteInput);
    removeP(deleteDiv);

    const valueExist = title => {
        drinks.deleteDrink(title) ? successAppear() : unfound(document.getElementById("deleteDiv"))
    }
    deleteName !== '' ? valueExist(deleteName) : noValue(deleteInput);

}

const findDrink = () => {
    const findName = document.getElementById("findDrink").value;
    const findInput = document.getElementById("findDrink");
    const foundDiv = document.getElementById("foundDrink");
    const foundDrink = drinks.infoDrink(findName);

    removeRed(findInput);
    removeP(foundDiv);

    const addToList = () => {
        foundDiv.innerHTML = `
        <p>напиток <b>${foundDrink.title}</b></p>
        <p>алкогольный <b>${alcoholic(foundDrink)}</b></p>
        <p>рецепт приготовления <b>${foundDrink.recipe}</b></p>
        `
    }

    const valueExist = value => value ? addToList() : unfound(foundDiv);

    findName !== '' ? valueExist(foundDrink) : noValue(findInput)


}

const listDrink = () => {
    const listDrink = drinks.getDrinks();
    const drinkHtml = listDrink.map(drink =>
        `
        <p>напиток <b>${drink.title}</b></p>
        <p>алкогольный <b>${alcoholic(drink)}</b></p>
        <p>рецепт приготовления <b>${drink.recipe}</b></p>
        <hr>
        `
    ).join('');
    document.getElementById('drinkList').innerHTML = drinkHtml;

}

const addButton = document.getElementById('add').addEventListener('click', addDrink);
const deleteButton = document.getElementById('delete').addEventListener('click', deleteDrinks);
const findButton = document.getElementById('find').addEventListener('click', findDrink);
const listButton = document.getElementById('list').addEventListener('click', listDrink);
const success = document.getElementById("success");