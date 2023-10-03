//API key - obtained on the "openweather"
const apiKey ="58a4d1f54d9e290b007d916f83dda2a7";
//API Link - obtained on the "openweather" -> documentation "current data weather" option "Built-in API request by city name"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//Get the information placed in the search box
const searchBox = document.querySelector(".search input");
//Get the information when the search button is pressed
const searchButton = document.querySelector(".search button");
//Get the weather Icon
const weatherIcon = document.querySelector(".weather-icon");

//Function that runs when the search button is pressed to obtain the weather data
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else{
        document.querySelector('.error').style.display = 'none';
    }

    var data = await response.json();

    console.log(data);

    //Re-write the HTML code according the desired city
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".mintemp").innerHTML = Math.round(data.main.temp_min) + " °C";
    document.querySelector(".maxtemp").innerHTML = Math.round(data.main.temp_max) + " °C";
    //To make the weather information appear again
    document.querySelector(".weather").style.display = 'block';

    if(data.weather[0].main === 'Clouds'){
        //src to update the source file
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === 'Clear'){
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === 'Rain'){
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === 'Mist'){
        weatherIcon.src = "images/mist.png";
    } 
};
//Function that lissens for the click of the button
searchButton.addEventListener("click", ()=>{checkWeather(searchBox.value)});





