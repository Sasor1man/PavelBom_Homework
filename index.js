const homeworkContainer = document.getElementById('hw-list');
const homeworkDescription = [
    {
        link: './jshomework/hw1_anketa/index.html',
        title:'Anketa'
    }
]

let homeworkList = '';

for (let i = 0; i < homeworkDescription .length; i++ ) {
    homeworkList += `
    <a href="${homeworkDescription [i].link}">
                <div>
                    <h3>Homework ${i + 1}</h3>
                    <p>${homeworkDescription[i].title}</p>
                </div>
            </a>
    `
}

homeworkContainer.innerHTML = homeworkList;