const _hour = document.getElementById('hour');
const _minute = document.getElementById('minute');
const _second = document.getElementById('second');
const _millisecond = document.getElementById('millisecond');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// document.getElementById('go-back').addEventListener('click', () => {
//     history.back();
// });

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let swInterval, stopTimeDiff = 0, tempTime = 0;
let pausedBtnOff = true;

startBtn.addEventListener('click', () => {
    let startTime = Date.now();
    tempTime = stopTimeDiff;
    if(pausedBtnOff){
        stopwatch(startTime);
        pausedBtnOff=false;
        startBtn.innerHTML = "Pause";
    } else {
        hour = 0, minute = 0, second = 0, millisecond = 0;
        displayUI();
        clearInterval(swInterval);
        timeConversion(stopTimeDiff);
        pausedBtnOff=true;
        startBtn.innerHTML = "Start";
    }
});

resetBtn.addEventListener('click', () => {
    hour = 0, minute = 0, second = 0, millisecond = 0;
    displayUI();
    clearInterval(swInterval);
    pausedBtnOff = true;
    startBtn.innerHTML = "Start";
    stopTimeDiff = 0;
    tempTime = 0;
});

function displayUI(){
    _hour.innerHTML = checkZero(hour,2);
    _minute.innerHTML = checkZero(minute,2);
    _second.innerHTML = checkZero(second,2);
    _millisecond.innerHTML = checkZero(millisecond,3);
}

displayUI();

function stopwatch(startTime){
    swInterval = setInterval(() => {
        let intervalTime = Date.now();
        let ms = intervalTime - (startTime - tempTime);
        stopTimeDiff = ms;
        timeConversion(ms);
    }, 1);
}

function timeConversion(ms){
    _millisecond.innerHTML = checkZero(ms % 1000, 3);
    second = Math.floor((ms / 1000) % 60);
    _second.innerHTML = checkZero(second, 2);
    minute = Math.floor((ms/(1000*60)) % 60);
    _minute.innerHTML = checkZero(minute,2);
    hour = Math.floor((ms / (100*60*60)) % 24);
    _hour.innerHTML = checkZero(hour,2);
}

function checkZero(timeVal, countOfZero){
    if(timeVal < 10 && countOfZero == 2){
        timeVal = '0' + timeVal;
    }
    if(timeVal < 100 && countOfZero == 3){
        if(timeVal < 10){
            timeVal = '00' + timeVal;
            return timeVal;
        }
        timeVal = '0' + timeVal;
    }
    return timeVal;
}