import { queryGiphyApi, queryWeatherApi } from '../queries/queries';

export const FETCH_LOCATION = 'FETCH_LOCATION'
export const fetchLocation = payload => dispatch => {
    return dispatch({
        type: FETCH_LOCATION,
        location: payload,
        payload: queryWeatherApi(payload)
        .then(locData => dispatch(setLocation(locData)))
    })
}

export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = payload => dispatch => {
    return dispatch({
        type: SET_LOCATION,
        tempActual: payload.tempActual,
        tempID: payload.tempID,
        weatherActual: payload.weatherActual,
        weatherID: payload.weatherID,
        humidityActual: payload.humidityActual,
        humidityID: payload.humidityID,
        timeActual: payload.timeActual,
        timeID: payload.timeID,
        response: payload,
        gifTempDispatch: queryGiphyApi(payload.tempID)
        .then(gifData => dispatch(storeGif(gifData, 'gifTemp'))),
        gifWeatherDispatch: queryGiphyApi(payload.weatherID)
        .then(gifData => dispatch(storeGif(gifData, 'gifWeather'))),
        gifHumidityDispatch: queryGiphyApi(payload.humidityID)
        .then(gifData => dispatch(storeGif(gifData, 'gifHumidity')))
    })
}

export const FETCH_GIFS = 'FETCH_GIFS';
export const fetchGifs = (payload, actioncreator) => dispatch => {
    const gifType = actioncreator;
    return dispatch({
        type: FETCH_GIFS,
        payload: queryGiphyApi(payload)
        .then((gifData) => dispatch(storeGif(gifData, gifType))) 
    })
}

export const STORE_GIF = 'STORE_GIF';
export const storeGif = (payload, actioncreator) => {
    return {
        type: STORE_GIF,
        property: actioncreator,
        gif: payload
    }
}