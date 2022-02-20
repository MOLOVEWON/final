const API_KEY = "355931a694b483bb3ba35ccf85875fa7";

function onGeoOk(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            
            weather.innerText = `| ${data.main.temp} ${data.weather[0].main}`;
            city.innerText = data.name;     
        });
       
   console.log(lat, lon);
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);