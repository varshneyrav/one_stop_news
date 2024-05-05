const API_KEY = `5ca811255efe381ffdc73ca39e5ab2c7`
const form = document.querySelector(".weather_dia form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

window.addEventListener("load", () => getweather("Agra"));


const getweather = async(city)=>{
    weather.innerHTML=`<style>
    .loader {
      border: 10px solid #f3f3f3;
      border-radius: 50%;
      border-top: 10px solid #3498db;
      width: 60px;
      height: 60px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
      margin-left:200px;
      margin-top:20px;
    }
  
    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .imgg{
        background-color:green;
    }
    </style>
    <div class="loader"></div>
    `
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response)
    const data = await response.json()
    return showweather(data);
}
// ravi ravi
const showweather = (data)=>{
    console.log(data)
    if(data.cod == 404){
        weather.innerHTML=`<h2 id="h2">city not found... </h2>`
    }
    if(data.cod == 400){
        weather.innerHTML=`<h4>Status 400 (no content)...</h4>`
    }
    weather.innerHTML = `
    <div class="imgg">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img">
    </div>
    <div class="h3">
            <h1> ${data.main.temp}℃</h1> 
            <h3> Feels like ${data.main.feels_like} ℃  </h3>
            <h4> ${data.weather[0].main}</h4>
    </div>
    `}
form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault()
    }
)
// ravi ravi
