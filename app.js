const apiKey = "aaa2ee4192a1ed8fb7c7ac8a63c08772";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weatherIcon; // Declare weatherIcon globally

window.onload = function () {
    const searchBox = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-button");
    weatherIcon = document.querySelector(".weather-icon"); // Assign to the global variable

    if (searchBox && searchBtn) {
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
    } else {
        console.error("Search input or button not found in the document.");
    }
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds") { // Fix the typo in "Colods" to "Clouds"
        weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") { // Fix the typo in "drizzle" to "Drizzle"
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png";
    }
}

 