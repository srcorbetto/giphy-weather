import { SET_LOCATION, STORE_GIF, FETCH_LOCATION } from './action-types';

const initialState = {
    location: null,
    tempActual: null,
    tempID: null,
    gifTemp: null,
    weatherActual: null,
    weatherID: null,
    gifWeather: null,
    humidityActual: null,
    humidityID: null,
    gifHumidity: null
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
                tempID: action.tempID,
                weatherActual: action.weatherActual,
                weatherID: action.weather,
                humidityActual: action.humidityActual,
                humidityID: action.humidityID
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