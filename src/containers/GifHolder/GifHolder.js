import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './GifHolder.css';

class GifHolder extends Component {

    render() {
        return (
            <div className="row pt-3">
                <Card
                    gif={this.props.gifTemp}
                    category="Temperature"
                    info={!this.props.tempActual ? null : 'Temperature: ' + this.props.tempActual + '° F'}
                />
                <Card
                    gif={this.props.gifWeather}
                    category="Weather"
                    info={!this.props.weatherActual ? null : 'Weather: ' + this.props.weatherActual}
                />
                <Card
                    gif={this.props.gifHumidity}
                    category="Humidity"
                    info={!this.props.humidityActual ? null : 'Humidity: ' + this.props.humidityActual}
                />
                <div className="col-12 pt-3">
                    <p className="disclaimer">Forecast powered by OpenWeatherMap & Giphy.</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
        location: state.location,
        tempActual: state.tempActual,
        gifTemp: state.gifTemp,
        weatherActual: state.weatherActual,
        gifWeather: state.gifWeather,
        humidityActual: state.humidityActual,
        gifHumidity: state.gifHumidity
    }
}

export default connect(mapStateToProps, null)(GifHolder);