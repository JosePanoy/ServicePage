import React from 'react';
import '../src/assets/css/window-feature4.css';
import pic1 from '../src/assets/img/17.jpg';
import pic2 from '../src/assets/img/18.jpg';
import pic3 from '../src/assets/img/20.jpg';
import pic4 from '../src/assets/img/21.jpg';
import pic5 from '../src/assets/img/19.jpg';

function WindowFeature4() {
    return (
        <div className="grid-container">
            <div className="merged-item">
                <p>Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with</p>
            </div>
            <div className="grid-item image-item">
                <img src={pic1} alt="Image 1" />
            </div>
            <div className="grid-item image-item">
                <img src={pic2} alt="Image 2" />
            </div>
            <div className="grid-item">7</div>
            <div className="grid-item content-item">
                <h3>Responsive</h3>
                <p>I am always available via phone, text, or email to answer your questions in a timely manner.</p>
            </div>
            <div className="grid-item content-item">
                <h3>Syndication</h3>
                <p>I market your property locally, nationally, and internationally.</p>
            </div>

            <div className="grid-item">10</div>

            <div className="grid-item image-item">
                <img src={pic3} alt="Image 3" />
            </div>
            <div className="grid-item image-item">
                <img src={pic4} alt="Image 4" />
            </div>

            <div className="grid-item">13</div>
            <div className="grid-item content-item">
                <h3>Virtual Tour</h3>
                <p>Let’s make your home stand out with a high quality virtual tour.</p>
            </div>
            <div className="grid-item content-item">
                <h3>Drone Photography</h3>
                <p>Beautiful photography is a central part of our marketing plan for your property.</p>
            </div>
        </div>
    );
}

export default WindowFeature4;
