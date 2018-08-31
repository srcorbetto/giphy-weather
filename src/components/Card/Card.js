import React from 'react';
// import shadow from '../../img/shadow.png';
import './Card.css';

const Card = props => {
    return (
        <div className="offset-1 col-10 offset-md-0 col-md-4 pb-5">
            <div className="weather-card">
                <h5 className="category">{props.category}</h5>
                <img className="gif"  title={props.info} alt={props.info} src={props.gif} />
                {/* <img className="shadow" src={shadow} /> */}
            </div>
        </div>
    )
}

export default Card;