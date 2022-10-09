
const clock = document.getElementById("clock");
const today = document.getElementById("today");

function onClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");    
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = (`${hour}:${minutes}:${second}`);
}

onClock();
setInterval(onClock, 1000);

function onDay(){
    const date = new Date();
    const yaer = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    today.innerText= (`${yaer}년 ${month}월 ${day}일`)

}

onDay();
onClock();
setInterval(onClock, 1000);
