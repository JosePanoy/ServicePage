import React from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import serviceimg from '../src/assets/img/main.jpg';
import '../src/assets/css/serviceimg.css';

function ServiceIMG() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInFromTop = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 600,
  });

  const fadeInLeft1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 800, easing: easings.linear },
    delay: 600,
  });

  return (
    <animated.div ref={ref} className="service-img-container" style={{ backgroundImage: `url(${serviceimg})` }}>
      <animated.div className="overlay">
        <animated.div style={fadeInFromTop} className="caption">Services</animated.div>
        <animated.div style={fadeInLeft1} className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for services..."
          />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}

export default ServiceIMG;
