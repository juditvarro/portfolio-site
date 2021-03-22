import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import AboutImage from '../AboutImage/AboutImage';
import Resume from '../Resume/Resume';
import Subtitle from '../Subtitle/Subtitle';

const style = {
    wrapper: {
        backgroundImage: 'linear-gradient(180deg, rgb(181,45,83) 0%, rgb(0,1,3) 100%,)',
    },
    about: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

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
        <Container style={style.wrapper} className='wrapperContainer'>
            <Subtitle subtitle='about me' />
            <Container style={style.about} className='about'>
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


