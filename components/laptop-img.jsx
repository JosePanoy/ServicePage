import React from 'react';
import laptopimg from '../src/assets/img/3.jpg';
import '../src/assets/css/laptop-img.css';
import { useSpring, animated, easings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function LaptopImg() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });

    const fadeInFromTop = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration: 900, easing: easings.linear },
        delay: 600,
      });
    return (

        <animated.div ref={ref} style={fadeInFromTop} className="laptop-img-container">
            <img src={laptopimg} alt="Laptop" className="responsive-img" />
        </animated.div>

    );
}

export default LaptopImg;
