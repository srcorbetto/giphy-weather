// Convert from Kelvin to F  
export const kelvToF = kelvin => {
    const tempF = Math.floor(((kelvin)*(9/5) - (459.67)));
    
    return tempF
}

// Conver Unix timestamp into standard dateTime
export const unixToDateTime = timestamp => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(timestamp * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

// Convert F to a string that GIPHY can use
export const gifTempEval = arg => {
    // Convert to F
    const tempF = Math.floor(((arg)*(9/5) - (459.67)));

    switch(true) {
        case tempF >= 100:
            return 'melting'
        case tempF < 100 && tempF > 85:
            return 'Sweating'
        case tempF <= 85 && tempF >= 80:
            return 'uncomfortable'
        case tempF < 80 && tempF > 70:
            return 'warm'
        case tempF <= 70 && tempF >= 60:
            return 'relaxing'
        case tempF < 60 && tempF > 49:
            return 'chilly'
        case tempF <= 49 && tempF > 32:
            return 'cold'
        case tempF <= 32 && tempF > 0:
            return 'freezing'
        case tempF <= 0 && tempF > -20:
            return 'frozen'
        default:
            return 'question mark'
    }
}

// Convert Humidity to a string that GIPHY can use
export const gifHumidityEval = humidity => {

    switch(true) {
        case humidity >= 100:
            return 'gross'
        case humidity < 100 && humidity > 85:
            return 'dripping'
        case humidity <= 85 && humidity >= 80:
            return 'moist'
        case humidity < 80 && humidity > 70:
            return 'sweat'
        case humidity <= 70 && humidity >= 60:
            return 'perfect'
        case humidity < 60 && humidity > 49:
            return 'comfortable'
        case humidity <= 49 && humidity > 32:
            return 'dry'
        case humidity <= 32 && humidity > 0:
            return 'nose bleed'
        case humidity <= 0 && humidity > -20:
            return 'desert'
        default:
            return 'question mark'
    }
}