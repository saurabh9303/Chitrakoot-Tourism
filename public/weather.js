"use strict";
    const getWeather=(location="Chitrakoot")=> {
    const API_KEY = "20cf7cc3ef1905f013c409e09238aca4";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    fetch(API_URL).then((response) => {
      if(response.status==404){
        document.getElementById("weather-data").innerHTML= "Error: City not found";
      }else if(response.status==200){
         return response.json();
      }else{
        document.getElementById("weather-data").innerHTML= "Error: Failed to fetch weather data";
      }
    }).then((data)=>{
      const icon = data.weather[0].icon;
      const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000).toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: true
      });
      const sunset = new Date((data.sys.sunset + data.timezone) * 1000).toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: true
      });
      document.getElementById("weather-data").innerHTML = `
       <div>
          <div>
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" class="me-3" style="width: 80px;">
              <h4 class="mb-0 fw-bold text-center">${data.name}, ${data.sys.country}</h4>
              <small class="text-muted text-capitalize">${data.weather[0].description}</small>
          </div>
          <p class="mb-2"><strong>🌡️ ${data.main.temp}°C</strong> (Feels like ${data.main.feels_like}°C)</p>
          <p class="mb-2">💧 <strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p class="mb-2">🌬️ <strong>Wind:</strong> ${data.wind.speed} m/s from ${getWindDirection(data.wind.deg)}</p>
          <p class="mb-2">📈 <strong>Pressure:</strong> ${data.main.pressure} hPa</p>
          <p class="mb-2">🌅 <strong>Sunrise:</strong> ${sunrise} &nbsp;&nbsp; 🌇 <strong>Sunset:</strong> ${sunset}</p>
          <p class="mt-3 fst-italic text-secondary">"${getWeatherComment(data.main.temp, data.main.humidity, data.weather[0].description)}"</p>
        </div>
      `;
      // const cityName = data.name;
      // const weatherDescription = data.weather[0].main;
      // const temp = data.main.temp;
      // console.log(data);

      // document.getElementById("weather-data").innerHTML= `<h1>${cityName}</h1><h4>${weatherDescription}</h4><p>${temp} &#x2103;</p>`;
    }).catch((error) => {
      document.getElementById("weather-data").innerHTML= "<span class='text-danger'>Error: Failed to fetch weather data</span>";
    });
  }
// Optional: Get wind direction
function getWindDirection(deg) {
  const directions = ['North', 'NE', 'East', 'SE', 'South', 'SW', 'West', 'NW'];
  return directions[Math.round(deg / 45) % 8];
}

// Optional: Generate a friendly comment
function getWeatherComment(temp, humidity, description) {
  if (temp > 35) return "It's really hot today. Stay hydrated!";
  if (humidity > 70) return "Quite humid today. You might feel sticky!";
  if (description.includes('cloud')) return "Some clouds around — not too sunny!";
  return "It's a fair day. Enjoy!";
}
getWeather();