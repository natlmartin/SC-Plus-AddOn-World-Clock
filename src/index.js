// Update current location time

function updateCurrentCity() {
  let currentCityElement = document.querySelector(".current-city-info");
  let currentCityTZ = moment.tz.guess();
  let currentCityName = currentCityTZ.replace("_", " ").split("/")[1];
  let currentCityTime = moment().tz(currentCityTZ);
  currentCityElement.innerHTML = `
<div>
            <h2>${currentCityName}</h2>
            <div class="date">${currentCityTime.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${currentCityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>`;
}

// Get other locations

function updateTime() {
  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisZone = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisZone.format("Do MMMM YYYY");
  parisTime.innerHTML = parisZone.format("h:mm:ss [<small>]A[</small>]");

  // Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDate = lisbonElement.querySelector(".date");
  let lisbonTime = lisbonElement.querySelector(".time");
  let lisbonZone = moment().tz("Europe/Lisbon");

  lisbonDate.innerHTML = lisbonZone.format("Do MMMM YYYY");
  lisbonTime.innerHTML = lisbonZone.format("h:mm:ss [<small>]A[</small>]");

  // Athens
  let athensElement = document.querySelector("#athens");
  let athensDate = athensElement.querySelector(".date");
  let athensTime = athensElement.querySelector(".time");
  let athensZone = moment().tz("Europe/Athens");

  athensDate.innerHTML = athensZone.format("Do MMMM YYYY");
  athensTime.innerHTML = athensZone.format("h:mm:ss [<small>]A[</small>]");
}

// Update container-cities with date and time for user-selected city

function updateCity(event) {
  let timeZone = event.target.value;
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector(".container-cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <div id="update-link"><a id="update-city" href="i/">Back to all cities</a></div>
        `;
}

updateCurrentCity();
updateTime();
setInterval(updateTime, 1000);
setInterval(updateCurrentCity, 1000);

// Update date time to user-selected city upon change

let userCity = document.querySelector("#city-selection");

userCity.addEventListener("change", updateCity);
