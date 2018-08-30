import axios from 'axios';
import * as converters from './converters';
import { OPEN_WEATHER_API_KEY, GIPHY_API_KEY } from '../keys';

export const queryWeatherApi = (query) => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + OPEN_WEATHER_API_KEY)
    .then(res => {
        console.log(res);
        return {
            tempActual: converters.kelvToF(res.data.main.temp),
            tempID: converters.gifTempEval(res.data.main.temp),
            weatherActual: res.data.weather[0].description,
            weatherID: converters.gifWeatherEval(res.data.weather[0].description),
            humidityActual: res.data.main.humidity,
            humidityID: converters.gifHumidityEval(res.data.main.humidity),
            time: converters.unixToDateTime(res.data.dt)
        }
    })
}

export const queryGiphyApi = (query) => {

    return axios.get('https://api.giphy.com/v1/gifs/' + query + '?api_key=' + GIPHY_API_KEY)
        .then(res => {
            console.log(query);
            console.log(res);
            return res.data.data.images.fixed_height.url
        })
    
  }

// Convert Time to a string that GIPHY can use
// export const gifHumidityEval = humidity => {

//     switch(true) {
//         case humidity >= 100:
//             return 'gross'
//         case humidity < 100 && humidity > 85:
//             return 'dripping'
//         case humidity <= 85 && humidity >= 80:
//             return 'moist'
//         case humidity < 80 && humidity > 70:
//             return 'sweat'
//         case humidity <= 70 && humidity >= 60:
//             return 'perfect'
//         case humidity < 60 && humidity > 49:
//             return 'comfortable'
//         case humidity <= 49 && humidity > 32:
//             return 'dry'
//         case humidity <= 32 && humidity > 0:
//             return 'nose bleed'
//         case humidity <= 0 && humidity > -20:
//             return 'desert'
//         default:
//             return 'question mark'
//     }
// }
