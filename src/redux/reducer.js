import { SET_LOCATION, STORE_GIF, FETCH_LOCATION } from './action-types';

const initialState = {
    response: 'test',
    location: null,
    tempActual: null,
    temp: null,
    gifTemp: null,
    weather: null,
    gifWeather: null,
    humidityActual: null,
    humidity: null,
    gifHumidity: null,
    time: null,
    gifTime: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOCATION:
            return{
                ...state,
                location: action.location
            }
        case SET_LOCATION:
            return {
                ...state,
                tempActual: action.tempActual,
                temp: action.temp,
                weather: action.weather,
                humidityActual: action.humidityActual,
                humidity: action.humidity,
                time: action.time,
                response: action.response
            }
        case STORE_GIF:
            const stateProp = action.property;
            return {
                ...state,
                [stateProp]: action.gif
            }
        default:
            return state
    }
}

export default reducer;