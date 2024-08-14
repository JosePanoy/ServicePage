import React from 'react';
import '../src/assets/css/marketingplan.css';
import img1 from '../src/assets/img/1.jpg';
import img2 from '../src/assets/img/2.jpg';

import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function MarketingPlan() {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1,
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
        from: { opacity: 0, transform: 'translateX(-30px)' },
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


      const fadeInRight1 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1000 },
        reset: true,
      });

      const fadeInRight2 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1200 },
        reset: true,
      });

      const fadeInRight3 = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(30px)' },
        config: { duration: 1400 },
        reset: true,
      });

      const fadeInFromTop1 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)', 
        config: { duration: 1000 },
    });

    return (
        <animated.div ref={ref} className="container">


            <animated.h1 style={fadeInFromTop1} className="title-h1">Comprehensive Marketing Plan</animated.h1>
            <div className="image-row">
                <animated.img style={fadeInLeft1} src={img1} alt="Image 1" />
                <animated.img style={fadeInRight1}src={img2} alt="Image 2" />
            </div>
            <div className="title-h2">
                <animated.h2 style={fadeInLeft2}>Responsive</animated.h2>
                <animated.h2 style={fadeInRight2}>Syndication</animated.h2>
            </div>
            <div className="caption-row">
                <animated.p style={fadeInLeft3}>I am always available via phone, text, or email.</animated.p>
                <animated.p style={fadeInRight3}>I market your property locally, nationally, and internationally</animated.p>
            </div>
        </animated.div>
    );
}

export default MarketingPlan;
