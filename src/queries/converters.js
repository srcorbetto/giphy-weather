// Convert from Kelvin to F  
export const kelvToF = kelvin => {
    const tempF = Math.floor(((kelvin)*(9/5) - (459.67)));
    
    return tempF
}

// Conver Unix timestamp into standard dateTime
export const unixToDateTime = timestamp => {

    // var timestamp = 1439329773; // replace your timestamp
    const date = new Date(timestamp * 1000);
    const formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    console.log(formattedDate);

    return formattedDate;
}

// Convert F to a string that GIPHY can use
export const gifTempEval = arg => {
    // Convert to F
    const tempF = Math.floor(((arg)*(9/5) - (459.67)));

    switch(true) {
        case tempF >= 100:
            return '3ktLOYGsoL8uDLbfIy'
        case tempF < 100 && tempF > 85:
            return 'l4pSWCnBmW7O8W17q'
        case tempF <= 85 && tempF >= 80:
            return 'fV8cSZA0EJcq55gZQo'
        case tempF < 80 && tempF > 70:
            return 'l4FGIp6PDxcuJbvdC'
        case tempF <= 70 && tempF >= 60:
            return '4HkdcaEALCejSzmpcQ'
        case tempF < 60 && tempF > 49:
            return 'l378AbkccL88mcB7W'
        case tempF <= 49 && tempF > 32:
            return '3oKIPvHGZvBbY3hYaY'
        case tempF <= 32 && tempF > 0:
            return '26Fxr37Nm9FNtOonK'
        case tempF <= 0 && tempF > -20:
            return 'l0MYDDMj9RDxNJrwc'
        default:
            return '1fm964SLnrY26wSD53'
    }
}

// Convert Humidity to a string that GIPHY can use
export const gifHumidityEval = humidity => {

    switch(true) {
        case humidity >= 100:
            return '8c1haKOGbnPluGn2GJ'
        case humidity < 100 && humidity > 85:
            return '5UBoPaMYPHROK0Ht9c'
        case humidity <= 85 && humidity >= 80:
            return 'l4KhUGTcw9aH6J45y'
        case humidity < 80 && humidity > 70:
            return '13OapIriToZMHu'
        case humidity <= 70 && humidity >= 60:
            return '9JgrEQtKIhHiNmgsR6'
        case humidity < 60 && humidity > 49:
            return '3oKIPpkfV8vbahAuDC'
        case humidity <= 49 && humidity > 32:
            return 'l4FGwVysHDX9A6AWQ'
        case humidity <= 32 && humidity > 0:
            return 'IqTQSuhgMDenK'
        case humidity <= 0 && humidity > -20:
            return 'dm1sY8uM36Agg'
        default:
            return '1fm964SLnrY26wSD53'
    }
}

// Convert Weather to a string that GIPHY can use
export const gifWeatherEval = weather => {

    switch(true) {
        case weather === 'clear sky':
            return '12bSyZ2lLVvZ4s'
        case weather === 'few clouds':
            return 'K7o9FdCoDnwEo'
        case weather === 'scattered clouds':
            return '8UGoPne38DRj4M7tgC'
        case weather === 'broken clouds':
            return '139VhIY2eHewz6'
        case weather === 'shower rain':
            return '7BLrHMYKpMxG0'
        case weather === 'rain':
            return '3WJsR3oQwp4A'
        case weather === 'thunderstorm':
            return 'VtOUGnwCOouCQ'
        case weather === 'snow':
            return 'h4rVmXTEaH160'
        case weather === 'mist':
            return 'C8okPSDOWUydX9zQwC'
        case weather === 'light intensity shower rain':
            return '10Il5KJtmnr7dC'
        case weather === 'overcast clouds':
            return '3oEjHUWNlf67TnmKDS'
        case weather === 'light rain':
            return '5YmnX9SxNbFargbddX'
        case weather === 'haze':
            return '8ZjEKUr3bsToA'
        default:
            return '1fm964SLnrY26wSD53'
    }
}