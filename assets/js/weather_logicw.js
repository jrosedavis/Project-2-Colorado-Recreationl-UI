var api = {
    key: 'f3ad52969d96a88aec01f1b67be1643a',  //need to change api key
    baseurl: 'https://api.openweathermap.org/data/2.5/'
};

var searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)

function setQuery(evt) {
    if (evt.keyCode == 13) {   //13 = Enter key is where the event listener is attached
        getResults(searchbox.value);
    };
};

function getResults (query) {  //here we're accessing openweathermap API
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
};

function displayResults (weather) { //json results are displayed in console

    var city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    var now = new Date();
    var date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    var temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;

    var weather_cur = document.querySelector('.current .weather');
    weather_cur.innerText = weather.weather[0].main;

    var hilow = document.querySelector('.hi-low');
    hilow.innerText  = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`
}

function dateBuilder (d) {
    var months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var day = days[d.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}