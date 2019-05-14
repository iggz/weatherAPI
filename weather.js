const weatherDiv = document.querySelector('[data-weather]');
const mainList = document.querySelector('.mainList')
console.log(weatherDiv);

// Append location name to the weather div
function addLocationName(object) {
    const locationName = document.createElement('h2')
    locationName.textContent = object.name;
    weatherDiv.appendChild(locationName);
    
}

// Add temperature to weather div
function addTemp(object) {
    const temp = document.createElement('span');
    temp.textContent = Math.floor((9/5) * (object.main.temp - 273) + 32);
    weatherDiv.appendChild(temp);

}

// Add wind speed to weather div
function addWind(object) {
    const wind = document.createElement('p');
    wind.innerHTML = object.wind.speed;
    weatherDiv.appendChild(wind);
    console.log('wind')
}

// Add icon to weather div
function addIcon(object) {
    // get icon code from object
    const iconCode = object.weather[0].icon;
    console.log(iconCode);
    // Use the icon code to get the icon using OpenWeatherMap.org
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    // Create a new image element using the iconUrl
    const iconImg = document.createElement('img');
    iconImg.setAttribute('src', iconUrl);
    console.log(iconImg)
    console.log(iconUrl)
    
    // Add the weather conditions to an h2 element
    const weatherCondition = document.createElement('h2');
    weatherCondition.innerHTML = object.weather[0].main;
    
    console.log(weatherCondition);
    
    // Append the text and image to the weatherDiv
    weatherDiv.appendChild(iconImg);
    weatherDiv.appendChild(weatherCondition);


}
// adds whatever data is passed to the weather div
function addToWeather(data) {

}

// creates map showing lat long of weather info
function addMap(object) {
    // get lat and long coordinates
    const lat = object.coord.lat;
    console.log(lat);
    const lon = object.coord.lon;
    console.log(lon);
    // Use the Lat/Long to create a map
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    

    // create iframe and set attributes
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    iframe.width = 800;
    iframe.height = 600;
    weatherDiv.appendChild(iframe);
}

function sunInfo(object, timeOfDay) {
    // get sunrise and sunset info
    const sunrise = object.sys.sunrise;
    console.log('sunrise: ', sunrise)
    const sunset = object.sys.sunset;
    console.log('sunset: ', sunset)
    // convert to standard date format
    const dateSR = new Date(sunrise);
    const dateSS = new Date(sunset);
    
    console.log("dateSR:",dateSR);
    console.log("dateSS:",dateSS);
    

    // let hoursSR = dateSR.getHours();
    // let minutesSR =  dateSR.getMinutes();
    // let secondsSR =  dateSR.getSeconds();
    // console.log(hoursSR);
    // console.log(minutesSR);
    // console.log(secondsSR);
}

// add correctly formatted dates to the page

    const srTime = document.createElement('h3');
    srTime.innerHTML = dateSR;
    weatherDiv.appendChild(srTime);



function formatDate(object) {
    // Get the date
    const testDate = document.createElement('h3')
    const unixDate = object.dt;
    testDate.append(unixDate);

    weatherDiv.appendChild(testDate);
    console.log("test date: ",testDate)

    let fixDate = new Date(testDate.innerHTML);
    
    console.log("fixDate: ", fixDate)


    // const unixDate = document.createElement('p')
    // unixDate.innerHTML = object.dt;
    // console.log("unixDate: ", unixDate)
    
    


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

// formatDate();


// Use the below URL to make a fetch request, 
// and then run the above functions to populate the page
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1";


function loadWeather(){
    get(URL)
    .then((response) => {
        console.log('addLocationName has run', response);
        addLocationName(response);

        console.log('addTemp has run', response);
        addTemp(response);

        console.log('addWind has run', response);
        addWind(response);

        console.log('addIcon has run', response);
        addIcon(response);

        console.log('addMap has run', response);
        addMap(response);

        console.log('sunInfo has run', response);
        sunInfo(response);

        console.log('formatDate has run', response);
        formatDate(response);

    });
}

loadWeather();