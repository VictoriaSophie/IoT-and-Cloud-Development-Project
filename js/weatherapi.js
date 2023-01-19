// API call
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=56.462002&";
let lon = "lon=-2.970700&";
let apiOptions = "units=metric&";
let apiKey = "appid=28a5d5a0cf18879b9fd97b1675931b9b";
let file = queryURL + lat + lon + apiOptions + apiKey;

fetch(file)
.then((response) => response.json()) //json format
.then((data) => {
  // Weather data
  let main = data.list[0].weather[0].main;
  let description = data.list[0].weather[0].description;
  let temp = Math.round(data.list[0].main.temp);
  let pressure = data.list[0].main.pressure;
  let humidity = data.list[0].main.humidity;

  // rest of day temp
  let hour3Temp = Math.round(data.list[1].main.temp);
  let hour6Temp = Math.round(data.list[2].main.temp);
  let hour9Temp = Math.round(data.list[3].main.temp);
  let hour12Temp = Math.round(data.list[4].main.temp);
  let hour15Temp = Math.round(data.list[5].main.temp);
  let hour18Temp = Math.round(data.list[6].main.temp);
  let hour21Temp = Math.round(data.list[7].main.temp);

  // Weather Forecast
  let day1Forecast = data.list[8].weather[0].main;
  let day1Temp = Math.round(data.list[8].main.temp);

  let day2Forecast = data.list[16].weather[0].main;
  let day2Temp = Math.round(data.list[16].main.temp);

  let day3Forecast = data.list[24].weather[0].main;
  let day3Temp = Math.round(data.list[24].main.temp);

  let day4Forecast = data.list[32].weather[0].main;
  let day4Temp = Math.round(data.list[32].main.temp);

  console.log(day4Temp);

});