var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // required for node
var xReq = new XMLHttpRequest() // define XHR obj

xReq.onreadystatechange = function (){ // define event handler
	if(this.readyState == 4 && this.status == 200) {
		let response = this.responseText;
		let convertedResponse = JSON.parse(response) // convert response to obj
		var temp = Math.round(convertedResponse.list[0].main.temp);
//		console.log(temp);

		var Gpio = require('onoff').Gpio; // include onoff to interact with the GPIO
//		var temp = 14;
//		console.log(temp);
		if (temp >= 20) {
			console.log("Temperature is above 20 degrees");
			var LED = new Gpio(14, 'out'); // green
		} else if (temp <= 10) {
			console.log("Temperature is below 10 degrees");
			var LED = new Gpio(0, 'out'); // red
		} else if (temp > 10 && temp < 20) {
			console.log("Temperature is inbetween 10 and 20 degrees");
			var LED = new Gpio(24, 'out'); // white
		}
		LED.writeSync(1);
	}
};

// API call
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?";
let lat = "lat=56.462002&";
let lon = "lon=-2.970700&";
let apiOptions = "units=metric&";
let apiKey = "appid=28a5d5a0cf18879b9fd97b1675931b9b";
let apiURL = queryURL + lat + lon + apiOptions + apiKey;

xReq.open("GET", apiURL, true); // initiate URL call
xReq.send(); // send server request
