function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col">
         <div class="card">
            <div class="card-body">
                <div class="card-title">${formatDay(forecastDay.dt)}</div>
                <div class="card-image">
                  <img 
                    src="http://openweathermap.org/img/wn/${
                      forecastDay.weather[0].icon
                    }@2x.png" 
                    alt="" 
                    width="70"
                  />
                </div>
                <div class="card-text">
                  <span class="high-temp"> ${Math.round(
                    forecastDay.temp.max
                  )}° </span> 
                  <span class="low-temp"> ${Math.round(
                    forecastDay.temp.min
                  )}° </span>
                </div>
            </div>
         </div>
      </div>
      `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let key = "4fefd93574c7263b1de6739f96f7742d";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`;
  axios.get(url).then(displayForecast);
}

searchCity("London");
