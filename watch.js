let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let hour=document.getElementById('hr');
let minute=document.getElementById('min');
let second=document.getElementById('sec');
let out=document.getElementById('show');

let lapTime;

hour=0;
minute=0;
second=0;
let timer=false;

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function start() {
    timer = true;
    stopWatch();
    startBtn.style.display="none";
}

function stop() {
    timer = false;
    startBtn.style.display="block";
}

function reset() {
    timer = false;
    startBtn.style.display="block";
    hour=0;
    minute=0;
    second=0;
    hrString=hour;
    minString=minute;
    secString=second;
    if (hour < 10) {
        hrString = "0" + hrString;
    }

    if (minute < 10) {
        minString = "0" + minString;
    }

    if (second < 10) {
        secString = "0" + secString;
    }

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('show').textContent="";
}

// let Time=false;
function lap(){
     lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
     document.getElementById('show').innerHTML += `<div>${lapTime}</div>`;
     
}

function stopWatch() {
    if (timer) {
        second++;

        if (second >59) {
            minute++;
            second = 0;
        }

        if (minute > 59) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        setTimeout(stopWatch, 1000);
    }
}




