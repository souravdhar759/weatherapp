const apikey = "5c662b746df37c7c8db26b50bab2bcc7";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searching =document.querySelector("#search")
let searchbtn = document.querySelector("#btn")
let weathericon = document.querySelector("#icon")

async function checkweather(city){
let response = await fetch(apiurl + city + `&appid=${apikey}` );
var data = await response.json();
console.log(data);

document.querySelector("#city").innerHTML = data.name;
document.querySelector("#temp").innerHTML =  Math.round(data.main.temp) + "°C";
document.querySelector("#hum").innerHTML = data.main.humidity + "%";
document.querySelector("#wind").innerHTML = data.wind.speed +"km/h";
document.querySelector("#sky").innerHTML = data.weather[0].main;


if(data.weather[0].main=="Clouds"){
weathericon.src= "images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
    weathericon.src= "images/clear.png"
}
else if(data.weather[0].main=="Rain"){
    weathericon.src= "images/rain.png"
}
else if(data.weather[0].main=="haze"){
    weathericon.src= "images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
    weathericon.src= "images/mist.png"
}
else if(data.weather[0].main=="Snow"){
    weathericon.src= "images/snow.png"
}
}
checkweather();

searchbtn.addEventListener("click",function(){
    checkweather(searching.value);
    console.log(searching);
})