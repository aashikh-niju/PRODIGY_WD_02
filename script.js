let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapList = document.getElementById('lapList');
let interval;
let lapCount = 0;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    lapList.innerHTML = ''; // Clear lap times on reset
    lapCount = 0;
});

btnLap.addEventListener('click', () => {
    lapCount++;
    let lapTime = `${formatTime(mins)}:${formatTime(seconds)}:${formatTime(tens)}`;
    let lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
});

function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
    }

    getTens.innerHTML = formatTime(tens);
    getSeconds.innerHTML = formatTime(seconds);
    getMins.innerHTML = formatTime(mins);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
