import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/action-types';
import './SearchBar.css';

let term;

class SearchBar extends Component {

    onChangeHandler(e) {
        term = e.target.value;
    }

    onSearchHandler(e) {
        e.preventDefault();
        e.target.reset();
    }

    componentDidUpdate() {
        if (this.props.temp && this.props.location) {
            // this.onFetchGifs('test', 'test');
        }
    }

    render() {
        return (
            <div className="row pt-4">
                <div className="col">
                    <form onSubmit={this.onSearchHandler} className="form-inline justify-content-center">
                        <div className="form-group mb-2">
                            <input onChange={this.onChangeHandler} type="text" className="location-search form-control-plaintext" placeholder="Enter a Location" />
                        </div>
                        <button onClick={this.props.onFetchLocation} className="btn btn-primary mb-2">Search</button>
                    </form>
                    <h1 className="searched-location">{this.props.location}</h1>
                    {/* <img src={this.props.gifTemp} alt=""/>
                    <img src={this.props.gifWeather} alt=""/>
                    <img src={this.props.gifHumidity} alt=""/>
                    <img src={this.props.gifTime} alt=""/> */}
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

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocation: () => dispatch(actionCreators.fetchLocation(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);