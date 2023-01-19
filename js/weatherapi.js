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
  
  // Getting data
  document.getElementById("wrapper-name").innerHTML = main;
  document.getElementById("wrapper-description").innerHTML = description;
  document.getElementById("wrapper-temp").innerHTML = temp + "°C";
  document.getElementById("wrapper-pressure").innerHTML = pressure;
  document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
  

  // rest of day temp
  // let hour3Temp = Math.round(data.list[1].main.temp);
  // let hour6Temp = Math.round(data.list[2].main.temp);
  // let hour9Temp = Math.round(data.list[3].main.temp);
  // let hour12Temp = Math.round(data.list[4].main.temp);
  // let hour15Temp = Math.round(data.list[5].main.temp);
  // let hour18Temp = Math.round(data.list[6].main.temp);
  // let hour21Temp = Math.round(data.list[7].main.temp);

  // Weather Forecast
  let day1Temp = Math.round(data.list[8].main.temp);
  let day1Date = (data.list[8].dt_txt).substring(8,10) + "/" +(data.list[8].dt_txt).substring(5,7)
  let day1Icon = data.list[8].weather[0].icon;

  let day2Temp = Math.round(data.list[16].main.temp);
  let day2Date = (data.list[16].dt_txt).substring(8,10) + "/" +(data.list[16].dt_txt).substring(5,7)
  let day2Icon = data.list[16].weather[0].icon;

  let day3Temp = Math.round(data.list[24].main.temp);
  let day3Date = (data.list[24].dt_txt).substring(8,10) + "/" +(data.list[24].dt_txt).substring(5,7)
  let day3Icon = data.list[24].weather[0].icon;

  let day4Temp = Math.round(data.list[32].main.temp);
  let day4Date = (data.list[32].dt_txt).substring(8,10) + "/" +(data.list[32].dt_txt).substring(5,7)
  let day4Icon = data.list[32].weather[0].icon;

  document.getElementById("date-tomorrow").innerHTML = day1Date;
  document.getElementById("date-2").innerHTML = day2Date;
  document.getElementById("date-3").innerHTML = day3Date;
  document.getElementById("date-4").innerHTML = day4Date;

  document.getElementById("temp-tomorrow").innerHTML = day1Temp;
  document.getElementById("temp-2").innerHTML = day2Temp;
  document.getElementById("temp-3").innerHTML = day3Temp;
  document.getElementById("temp-4").innerHTML = day4Temp;

  // Icons 
  let iconURL = "http://openweathermap.org/img/wn/";
  let iconFormat = ".png";
  
  document.getElementById("icon-tomorrow").src = iconURL + day1Icon + iconFormat;
  document.getElementById("icon-2").src = iconURL + day2Icon + iconFormat;
  document.getElementById("icon-3").src = iconURL + day3Icon + iconFormat;
  document.getElementById("icon-4").src = iconURL + day4Icon + iconFormat;
  
  // Backgrounds
  switch (main) {
    case "Snow":
      document.getElementById("bg").style.backgroundImage = "url('https://media.tenor.com/6YSQJKI2ZzMAAAAM/snowman-headstand.gif')";
      break;
    case "Clouds":
      document.getElementById("bg").style.backgroundImage = "url('https://media4.giphy.com/media/PIh4laWJlz9bq/giphy.gif')";
      break;
    case "Rain":
      document.getElementById("bg").style.backgroundImage = "url('https://media.tenor.com/ZAw_hz_GBBsAAAAd/rain.gif')";
      break;
    case "Thunderstorm":
      document.getElementById("bg").style.backgroundImage = "url('https://media.tenor.com/H3Kgi_GNILcAAAAM/madness-thunderstorm.gif')";
      break;
    case "Drizzle":
      document.getElementById("bg").style.backgroundImage = "url('https://thumbs.gfycat.com/AbleWindingIceblueredtopzebra-size_restricted.gif')";
      break;
    default:
      document.getElementById("bg").style.backgroundImage = "url('https://media1.giphy.com/media/3oEjHGZkrolm9UgvM4/giphy.gif')";
      break;
    }   
  
  
  console.log(data.list[0]);

});