function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Tues", "Wed", "Thurs", "Fri"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col">
         <div class="card">
            <div class="card-body">
                <div class="card-title">${day}</div>
                <div class="card-image">
                  <img 
                    src="http://openweathermap.org/img/wn/50d@2x.png" 
                    alt="" 
                  />
                </div>
                <div class="card-text">
                  <span class="high-temp"> 8° </span> 
                  <span class="low-temp"> 2° </span>
                </div>
            </div>
         </div>
      </div>
      `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let key = "4fefd93574c7263b1de6739f96f7742d";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`;
  axios.get(url).then(displayForecast);
}
