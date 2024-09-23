const displayTime = document.getElementById("displayTime");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const link = document.querySelector("a")
const footer = document.querySelector("footer")

let [hour, minute, second] = [0,0,0];
let timer = null;

function startTime() {
    second++;
    if(second == 60) {
        second = 0;
        minute++;
        if(minute == 60) {
            minute = 0;
            hour ++;
        }
    }
    let newHour = hour < 10 ? "0" + hour : hour;
    let newMinute = minute < 10 ? "0" + minute : minute;
    let newSecond = second < 10 ? "0" + second : second;

    displayTime.innerHTML = newHour + ":" + newMinute + ":" + newSecond;
}

start.addEventListener("click", e=> {
    if(timer !== null) {
        clearInterval(timer)
    } else {
        timer =  setInterval(startTime, 1000)
    }
})

stop.addEventListener("click", e=> {
    clearInterval(timer)
})

reset.addEventListener("click", e=> {
    clearInterval(timer)
    console.log("yes")
    hour = 0;
    minute = 0;
    second = 0;
    timer = null;
   displayTime.innerHTML = "00:00:00";
})