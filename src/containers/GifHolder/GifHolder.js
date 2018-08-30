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
                />
                <Card
                    gif={this.props.gifWeather}
                    category="Weather"
                />
                <Card
                    gif={this.props.gifHumidity}
                    category="Humidity"
                />
                <Card
                    gif={this.props.gifTemp}
                    category="Time"
                />
                <div className="col-12 pt-3">
                    <p className="disclaimer">Forcast powered by OpenWeatherMap & Giphy.</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
        location: state.location,
        response: state.response,
        gifTemp: state.gifTemp,
        gifWeather: state.gifWeather,
        gifHumidity: state.gifHumidity,
        gifTime: state.gifTime,
        temp: state.temp
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchLocation: () => dispatch(actionCreators.fetchLocation(term))
//     }
// }

export default connect(mapStateToProps, null)(GifHolder);