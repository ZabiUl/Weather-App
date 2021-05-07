const key = 'ykN9MFojXz1VT4pKDGOi6VGZ4VLWG4pu';

const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

const getWeather = async (locationkey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationkey}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

// getCity('buenos aires')
//     .then(RecievedCityData => {
//         return getWeather(RecievedCityData.Key);
//     }).then(RecievedWeatherData => {
//         console.log(RecievedWeatherData);
//     })
//     .catch(error => console.log(error));