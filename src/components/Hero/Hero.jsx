import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import Intro from '../Intro/Intro';
import Background from '../../assets/herobackgr.jpg';

const style = {
    hero: {
        minHeight: '80vh',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '0px',
        background: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '5rem 3rem',
    }
}

const Hero = () => {
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
        <Container style={style.hero} className='hero'>
            <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500}>
                <Title title='portfolio website' />
            </Fade>
            <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={1000}>
                <Intro name='Judit' />
            </Fade>
        </Container>
    );
};

export default Hero;


