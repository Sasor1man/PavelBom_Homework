const newYear = new Date(2025, 0, 1);
// const current = new Date();

let timer = 0;

timer = setInterval(() => {
    currentTime = new Date();
    console.log(newYear.getTime() - currentTime.getTime())
})