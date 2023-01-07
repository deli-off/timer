// let timeType = document.querySelector('.time')
// let startBtn = document.querySelector('.start')
// let stopBtn = document.querySelector('.stop')
// let resetBtn = document.querySelector('.reset')

var h1 = document.querySelector('.time')
var start = document.querySelector('.start')
var stop = document.querySelector('.stop')
var reset = document.querySelector('.reset')
var sec = 0;
var min = 0;
var hrs = 0;
var t;

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