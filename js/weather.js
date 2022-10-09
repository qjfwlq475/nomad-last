
const MY_KEY = "1f9c4e9d7cd3037c0d63775a0f6aced9";

function onWeather(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${MY_KEY}`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
    })
}

function onErr(){
    alert("Error");
}


navigator.geolocation.getCurrentPosition(onWeather, onErr);
