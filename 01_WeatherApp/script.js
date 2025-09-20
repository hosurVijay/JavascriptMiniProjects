
const apiKey = 'key';
const apiUrl = "apiUrl";

const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon")

const searchBtn = document.querySelector(".search button")


let city = "New york";
async function checkWeather(city) {
    console.log(apiUrl + city +  `&appid=${apiKey}`)
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    console.log(response)
    if(response.status == 404){
        document.querySelector('.error').style.display = "Block";
        document.querySelector('.weather').style.display = "none";
    }else{
        let data = await response.json();
        console.log(data)
        document.querySelector('.error').style.display = "none"
   
    
        document.querySelector(".city").innerHTML =     data.name
        document.querySelector(".temp").innerHTML =     Math.round(data.main.temp) + `°C`
        document.querySelector(".humidity").innerHTML   = data.main.humidity + ` %`
        document.querySelector(".wind").innerHTML = data.wind.speed + ` km/hr`;

        if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy_4167191.png"
        }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun_7813183.png"
        }else if(data.weather[0].main == "Strom"){
        weatherIcon.src = "stom_8290459.png";
        }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain_3406981.png"
        }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist_16273860.png";
        }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle_1113720.png";
        }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snowy_6566238.png";
        }

        document.querySelector('.weather').style.display = "block";
    }
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

