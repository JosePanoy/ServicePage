import React from 'react';
import '../src/assets/css/markethome.css';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function MarketHome() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const fadeInFromTop1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)', 
        config: { duration: 1000 },
    });

    const fadeInLeft1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1000, easing: easings.linear },
        reset: true,
    });

    const fadeInLeft2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-40px)' },
        config: { duration: 1200, easing: easings.linear },
        reset: true,
    });

    const fadeInLeft3 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1400, easing: easings.linear },
        reset: true,
    });

    const fadeInLeft4 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-30px)' },
        config: { duration: 1400, easing: easings.linear },
        reset: true,
    });

  return (
    <animated.div style={fadeInFromTop1} ref={ref} className="market-home-container">
      <div className="row row-1">
        <h2>We Market Your Home to The World</h2>
      </div>
      <animated.div style={fadeInLeft1} className="row row-2">
        <h3>Our Online Marketing Strategy</h3>
        <p>​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.</p>
      </animated.div>



      <div className="row row-3">

        <animated.div style={fadeInLeft2}>
          <h4>Local Exposure</h4>
          <p>Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.</p>
        </animated.div>


        <animated.div style={fadeInLeft2}>
          <h4>National Exposure</h4>
          <p>We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.</p>
        </animated.div>


        <animated.div style={fadeInLeft3}>
          <h4>International Exposure</h4>
          <p>To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, 
          China.apr.com, Caimeiju, Juwai, Country Life UK</p>
        </animated.div>


      </div>
    </animated.div>
  );
}

export default MarketHome;
