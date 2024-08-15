import React from 'react';
import laptopimg from '../src/assets/img/3.jpg';
import '../src/assets/css/laptop-img.css';

function LaptopImg() {
    return (
        <div className="laptop-img-container">
            <img src={laptopimg} alt="Laptop" className="responsive-img" />
        </div>
    );
}

export default LaptopImg;
