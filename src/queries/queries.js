import axios from 'axios';
import * as converters from './converters';
import { OPEN_WEATHER_API_KEY, GIPHY_API_KEY } from '../keys';

export const queryWeatherApi = (query) => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + OPEN_WEATHER_API_KEY)
    .then(res => {
        // console.log(res);
        return {
            tempActual: converters.kelvToF(res.data.main.temp),
            tempID: converters.gifTempEval(res.data.main.temp),
            weatherActual: res.data.weather[0].description,
            weatherID: converters.gifWeatherEval(res.data.weather[0].description),
            humidityActual: res.data.main.humidity,
            humidityID: converters.gifHumidityEval(res.data.main.humidity)
        }
    })
}

export const queryGiphyApi = (query) => {

    return axios.get('https://api.giphy.com/v1/gifs/' + query + '?api_key=' + GIPHY_API_KEY)
        .then(res => {
            // console.log(query);
            // console.log(res);
            return res.data.data.images.fixed_height.url
        })
    
  }
