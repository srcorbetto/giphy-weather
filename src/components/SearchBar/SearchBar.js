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
                            <input onChange={this.onChangeHandler} type="text" className="location-search form-control-plaintext" placeholder="Enter a City" />
                        </div>
                        <button onClick={this.props.onFetchLocation} className="btn btn-primary btn-desktop mb-2"><i className="fas fa-search"></i> Search</button>
                        <button onClick={this.props.onFetchLocation} className="btn btn-primary btn-mobile mb-2"><i className="fas fa-search"></i></button>
                    </form>
                    <h1 className="searched-location">{this.props.location}</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
        location: state.location
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchLocation: () => dispatch(actionCreators.fetchLocation(term.trim().toLowerCase()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);