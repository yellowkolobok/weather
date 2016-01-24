navigator.geolocation.getCurrentPosition(function(position) {  
    var gps = (position.coords.latitude+ "&lon=" + position.coords.longitude);  

    var xmlhttp = new XMLHttpRequest();

    var json;
    var days = 3;
    var weatherLink = "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + gps + "&lang=ru&units=metric&cnt=" + days + "&appid=44db6a862fba0b067b1930da0d769e98";

    xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        json = JSON.parse(xmlhttp.responseText);
        document.getElementById('weather-morn').innerHTML = "Утро: " + json.list[0].temp.morn;
        document.getElementById('weather-day').innerHTML = "День: " + json.list[0].temp.day;
        document.getElementById('weather-eve').innerHTML = "Вечер: " + json.list[0].temp.eve;
        document.getElementById('weather-night').innerHTML = "Ночь: " + json.list[0].temp.night;
        document.getElementById('weather-cond').innerHTML = "Погодные условия: " + json.list[0].weather[0].description;
        document.getElementById("image-holder-1").innerHTML = "<img src='" + "http://openweathermap.org/img/w/" + json.list[0].weather[0].icon + ".png'>";

        document.getElementById('weather-morn-tomorrow').innerHTML = "Утро: " + json.list[0].temp.morn;
        document.getElementById('weather-day-tomorrow').innerHTML = "День: " + json.list[1].temp.day;
        document.getElementById('weather-eve-tomorrow').innerHTML = "Вечер: " + json.list[1].temp.eve;
        document.getElementById('weather-night-tomorrow').innerHTML = "Ночь: " + json.list[1].temp.night;
        document.getElementById('weather-cond-tomorrow').innerHTML = "Погодные условия: " + json.list[1].weather[0].description;
        document.getElementById("image-holder-2").innerHTML = "<img src='" + "http://openweathermap.org/img/w/" + json.list[1].weather[0].icon + ".png'>";

        document.getElementById('weather-morn-aftertomorrow').innerHTML = "Утро: " + json.list[0].temp.morn;
        document.getElementById('weather-day-aftertomorrow').innerHTML = "День: " + json.list[2].temp.day;
        document.getElementById('weather-eve-aftertomorrow').innerHTML = "Вечер: " + json.list[2].temp.eve;
        document.getElementById('weather-night-aftertomorrow').innerHTML = "Ночь: " + json.list[2].temp.night;
        document.getElementById('weather-cond-aftertomorrow').innerHTML = "Погодные условия: " + json.list[2].weather[0].description;
        document.getElementById("image-holder-3").innerHTML = "<img src='" + "http://openweathermap.org/img/w/" + json.list[2].weather[0].icon + ".png'>";

        document.getElementById('city').innerHTML = "Ваш город: " + json.city.name;

        }
    };

        xmlhttp.open('GET', weatherLink, true);
        xmlhttp.send();
});