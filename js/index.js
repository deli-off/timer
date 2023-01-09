// let timeType = document.querySelector('.time')
// let startBtn = document.querySelector('.start')
// let stopBtn = document.querySelector('.stop')
// let resetBtn = document.querySelector('.reset')

let h1 = document.querySelector('.time')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let sec = 0;
let min = 0;
let hrs = 0;
let t;

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}


function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
timer();

start.onclick = timer;

stop.onclick = () => {
    clearTimeout(t);
}

reset.onclick = () => {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hrs = 0;
}