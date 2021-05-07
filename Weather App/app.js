let form = document.querySelector('.weather-form');
let timings = document.querySelector('.timing-section');
let tempratureDetails = document.querySelector('.temprature-section');
let tempratureSection = document.querySelector('.weather-wrapper');
let img = document.querySelector('.time-img');
let icon = document.querySelector('body > div > div.timing-section > span > img');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const enteredCity = form.location.value.trim();
    form.reset();
    updateCity(enteredCity).then(recievedData => {
        updateUI(recievedData);
    })
    .catch(error => {
        console.log(error);
    });
    
    if(tempratureSection.classList.contains('hide')){
        tempratureSection.classList.remove('hide');
    }
});
const updateCity = async (enteredCity) => {
    const cityDetails = await getCity(enteredCity);
    const weatherDetails = await getWeather(cityDetails.Key);
    return {cityDetails, weatherDetails};
};

const updateUI = (recievedData) => {
    const locationDetails = recievedData.cityDetails;
    const weatherConditions = recievedData.weatherDetails;
    
    tempratureDetails.innerHTML = `<h3>${locationDetails.EnglishName}</h3>
    <h5>${weatherConditions.WeatherText}</h5>
    <h2><span class="temp">${weatherConditions.Temperature.Metric.Value}</span>&deg;C</h2>`;

    let imgSrc = null;
    if(weatherConditions.IsDayTime){
        imgSrc = 'img/day.png';
    }else{
        imgSrc = 'img/night.png';
    }
    img.setAttribute('src', imgSrc);

    let iconSrc = `img/icons/${weatherConditions.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
};