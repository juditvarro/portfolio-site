import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import AboutImage from '../AboutImage/AboutImage';
import Resume from '../Resume/Resume';
import Subtitle from '../Subtitle/Subtitle';
import '../../styles/About.css';
import '../../styles/WrapperContainer.css';

const About = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <Container className='wrapperContainer'>
            <Subtitle subtitle='ABOUT ME' />
            <Container className='about'>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000}>
                    <AboutImage />
                </Fade>
                <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500}>
                    <Resume />
                </Fade>
            </Container>
        </Container>
    );
};

export default About;


