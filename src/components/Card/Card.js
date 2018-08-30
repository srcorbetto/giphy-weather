import React from 'react';
import shadow from '../../img/shadow.png';
import './Card.css';

const Card = props => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="weather-card">
                <h5 className="category">{props.category}</h5>
                <img className="gif" src={props.gif} />
                {/* <img className="shadow" src={shadow} /> */}
            </div>
        </div>
    )
}

export default Card;