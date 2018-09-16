import axios from 'axios';
import * as converters from './converters';

export const queryWeatherApi = (query) => {
    return axios.get('https://get-api.herokuapp.com/api/weather/' + query)
    .then(res => {
        return {
            tempActual: converters.kelvToF(res.data.data.main.temp),
            tempID: converters.gifTempEval(res.data.data.main.temp),
            weatherActual: res.data.data.weather[0].description,
            weatherID: converters.gifWeatherEval(res.data.data.weather[0].description),
            humidityActual: res.data.data.main.humidity,
            humidityID: converters.gifHumidityEval(res.data.data.main.humidity)
        }
    })
    .catch(function (error) {
        const setError = 'City not found.';
        console.log(error);
        return setError;
      });
}

export const queryGiphyApi = (query) => {

    return axios.get('https://get-api.herokuapp.com/api/gif/' + query)
        .then(res => {
            return res.data.data;
        })
        .catch(function (error) {
            console.log(error);
            return error
          });
    
  }
