import React from 'react';
// import shadow from '../../img/shadow.png';
import './Card.css';

const Card = props => {
    return (
        <div className="offset-1 col-11 offset-sm-0 col-sm-6 col-md-4">
            <div className="weather-card">
                <h5 className="category">{props.category}</h5>
                <img className="gif"  title={props.info} alt={props.info} src={props.gif} />
                {/* <img className="shadow" src={shadow} /> */}
            </div>
        </div>
    )
}

export default Card;