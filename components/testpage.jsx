import React from 'react';
import '../src/assets/css/test.css';
import pic1 from '../src/assets/img/19.jpg'; 
import pic2 from '../src/assets/img/17.jpg'; 
import pic3 from '../src/assets/img/18.jpg'; 
import pic4 from '../src/assets/img/20.jpg'; 
import pic5 from '../src/assets/img/21.jpg'; 

function TestPage() {
  return (
    <div className="container">
      <div className="content1">
        <p>Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:</p>
      </div>
      <div className="pic5"><img src={pic1} alt="pic1" /></div>
      <div className="pic1"><img src={pic2} alt="pic2" style={{ width: '120px', height: '120px' }} /></div>
      <div className="content2">
        <h2>Responsive</h2>
        <p>I am always available via phone, text, or email to answer your questions in a timely manner.</p>
      </div>
      <div className="pic2"><img src={pic3} alt="pic3" style={{ width: '120px', height: '120px' }} /></div>
      <div className="content3">
        <h2>Syndication</h2>
        <p>I market your property locally, nationally, and internationally.</p>
      </div>
      <div className="pic3"><img src={pic4} alt="pic4" style={{ width: '120px', height: '120px' }} /></div>
      <div className="content4">
        <h2>Virtual Tour</h2>
        <p>Let’s make your home stand out with a high quality virtual tour.</p>
      </div>
      <div className="pic4"><img src={pic5} alt="pic5" style={{ width: '120px', height: '120px' }} /></div>
      <div className="content5">
        <h2>Drone Photography</h2>
        <p>Beautiful photography is a central part of our marketing plan for your property.</p>
      </div>
    </div>
  );
}

export default TestPage;
