const newYear = new Date(2025, 0, 1);
// const current = new Date();

let timer = 0;

timer = setInterval(() => {
    currentTime = new Date();
    const time = newYear.getTime() - currentTime.getTime();

    console.log('days', time / (1000 * 60 * 60 * 24));
    console.log('hours', time / (1000 * 60 * 60) % 24);
    console.log('minutes', (time % (1000 * 60)));
    console.log('seconds', (time % (1000 * 60)) / 1000);
}, 1000)