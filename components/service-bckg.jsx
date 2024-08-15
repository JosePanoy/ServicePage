import React from 'react';
import serviceimg from '../src/assets/img/main.jpg';
import '../src/assets/css/serviceimg.css';

function ServiceIMG() {
    return (
        <div
            className="service-img-container"
            style={{ backgroundImage: `url(${serviceimg})` }}
        >
            <div className="overlay">
                <div className="caption">Services</div>
                <div className="search-bar-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for services..."
                    />
                </div>
            </div>
        </div>
    );
}

export default ServiceIMG;
