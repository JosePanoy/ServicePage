import React from 'react';
import pic1 from '../src/assets/img/9.jpg';
import pic2 from '../src/assets/img/10.jpg';
import pic3 from '../src/assets/img/11.jpg';
import '../src/assets/css/window-feature2.css';

function WindowFeature2() {
    return (
        <div className="grid-container">
            <div className="box pic2">
                <img src={pic2} alt="pic2" />
            </div>
            <div className="box content1">
                <h2>Over 33 Years of Real Estate Success</h2>
                <p>We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, its experience is 100% nonnegotiable. And it’s an experience like no other.</p>
            </div>
            <div className="box pic3">
                <img src={pic3} alt="pic3" />
            </div>
            <div className="box content4">
                <h2>We Want To Create An Unforgettable Experience For You...</h2>
                <p>We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.</p>
            </div>
            <div className="box pic6">
                <img src={pic1} alt="pic1" />
            </div>
            <div className="box content57">
                <h2>The Hansen Partners Communications Tablet</h2>
                <p>We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.</p>
                <p>Benefits:</p>
                <ul>
                    <li>Review all documents and sign in the comfort of your home or anywhere.</li>
                    <li>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                    <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                    <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.</li>
                    <li>We believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times, it is a good feeling to know you have someone with a proven track record you can count on. We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because, that is just what we do. Who you work with does matter!</li>
                </ul>
            </div>
        </div>
    );
}

export default WindowFeature2;
