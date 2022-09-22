import '../styles.css';
import React from 'react';

function Main(props) {
    return (
        <div className="places">
            <img src={process.env.PUBLIC_URL + `/images/${props.image}`} className="pictures"/>
            <div className='right'>
                <div className='location-div'>
                    <i class="location-icon fa-solid fa-location-dot"></i>
                    <span className='location'>{props.location}</span>
                    <a className="maps-link" target="_blank" href={props.url}>
                        view on Google Maps
                    </a>
                </div>
                <h2 className='place'>{props.title}</h2>
                <span className='start-end-class'>{props.start}-{props.end}</span>
                <span className='description'>{props.description}</span>
            </div>
        </div>
    )
}


export {Main}