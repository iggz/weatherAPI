const weatherDiv = document.querySelector('getWeather');

console.log(weatherDiv);

// Append location name to the weather div
function addLocationName(object) {
    const locationName = document.getElementById('locationName');
    locationName.innerHTML = object.name;
    return 'Location: ${locationName}';
}

// Add temperature to weather div
function addTemp(object) {
    const temp = document.getElementById('temp');
    temp.innerHTML = Math.floor((9/5) * (object.main.temp - 273) + 32)
    
}

// Add wind speed to weather div
function addWind(object) {
    const wind = document.getElementById('wind');
    wind.innerHTML = object.wind.speed;
}

// Add icon to weather div
function addIcon(object) {
    // get icon code from object
    // const iconCode = document.getElementById('iconCode');
    // iconCode.innerHTML = object.weather[0].icon;

    const iconCode = object.weather[0].icon;

    // Use the icon code to get the icon using OpenWeatherMap.org
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    // console.log("icon url", iconUrl);

    // Create a new image element using the iconUrl
    const newIcon = document.getElementById('newIcon');
    newIcon.setAttribute('src', iconUrl);   

    // Add the weather conditions to an h2 element

    const weatherConditions = document.getElementById('weatherConditions')
    console.log(weatherConditions);
    weatherConditions.innerHTML = object.weather[0].main;
    

    // Append the text and image to the weatherDiv

    
    
}
// adds whatever data is passed to the weather div
function addToWeather(data) {

}

// creates map showing lat long of weather info
function addMap(object) {
    // get lat and long coordinates
    
    // Use the Lat/Long to create a map
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;

    // create iframe and set attributes
    const iframe = document.createElement('iframe');

}

function sunInfo(object, timeOfDay) {
    // get sunrise and sunset info
    
    // convert to standard date format

}

// add correctly formatted dates to the page
function formatDate(date) {
    // Get the date
    const day = date.getDate();

    // Get the month
    // month starts at 0
    const month = date.getMonth() + 1;
    console.log(month);

    // Get the hours
    const hours = date.getHours();

    // Get the minutes
    let minutes =  date.getMinutes();

    // if statement to reformat minutes
    // from a single digit to a two digit with a leading zero
    // i.e. change "1" to "01"
    
    // Get seconds

    // Format the time in a friendly format

    // Format the date in a friendly format

    // Return the date and time...
    return
}

function addItem(item) {
    const weatherList = document.getElementById('weatherList');
    const locationItem = document.createElement('li');
    locationItem.textContent = item;
    weatherList.append(locationItem);

}

// Use the below URL to make a fetch request, 
// and then run the above functions to populate the page
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";


function loadWeather(){
    get(URL)
    .then((response) => {
        console.log('addLocationName has run', response)
        addLocationName(response)
        console.log('addTemp has run', response)
        addTemp(response);
        addWind(response);
        console.log('iconCode has run', response)
        addIcon(response);

    })
}
loadWeather();




