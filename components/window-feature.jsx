import React from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import pic1 from '../src/assets/img/5.jpg';
import pic2 from '../src/assets/img/6.jpg';
import pic3 from '../src/assets/img/7.jpg';
import pic4 from '../src/assets/img/8.jpg';
import '../src/assets/css/window-feature.css';

function WindowFeature() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInLeft1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-20px)',
    config: { duration: 500, easing: easings.linear },
    delay: 500,
  });

  const fadeInRight1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(20px)',
    config: { duration: 500 },
    delay: 700,
  });

  const fadeInLeft2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-20px)',
    config: { duration: 700, easing: easings.linear },
    delay: 900,
  });

  const fadeInRight2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(20px)',
    config: { duration: 900 },
    delay: 1100,
  });

  return (
    <animated.div ref={ref} className="grid-container">
      <animated.div className="grid-item black-background">
        <h2>Decor Guidance</h2>
      </animated.div>

      <animated.div className="grid-item" style={fadeInRight1}>
        <img src={pic1} alt="Pic 1" />
      </animated.div>

      <animated.div className="grid-item" style={fadeInLeft1}>
        <img src={pic2} alt="Pic 2" />
      </animated.div>

      <div className="grid-item no-background">
        <h2>My Staging Expertise</h2>
        <ul>
          <li>Unclutter and organize your home</li>
          <li>Neatly arrange drawers and cabinets</li>
          <li>Keep pets outdoors or off the premises</li>
          <li>Play soft music</li>
        </ul>
      </div>

      <div className="grid-item black-background">
        <h2>Intentional Layout</h2>
      </div>

      <animated.div className="grid-item" style={fadeInRight1}>
        <img src={pic3} alt="Pic 3" />
      </animated.div>

      <animated.div className="grid-item" style={fadeInLeft2}>
        <img src={pic4} alt="Pic 4" />
      </animated.div>

      <div className="grid-item no-background">
        <ul>
          <li>Unclutter and organize your home</li>
          <li>Neatly arrange drawers and cabinets</li>
          <li>Keep pets outdoors or off the premises</li>
          <li>Play soft music</li>
        </ul>
      </div>
    </animated.div>
  );
}

export default WindowFeature;
