// Get location of user
// Update current location time

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

updateTime();
setInterval(updateTime, 1000);
