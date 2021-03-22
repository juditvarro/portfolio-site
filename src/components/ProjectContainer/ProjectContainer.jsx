import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Project from '../Project/Project';
import ProjectImage from '../ProjectImage/ProjectImage';
import Subtitle from '../Subtitle/Subtitle';

const style = {
    wrapper: {
        minHeight: '80vh',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '0px',
        backgroundColor: 'rgb(0, 0, 2)',
        backgroundImage: 'linear-gradient(180deg, rgb(0,1,3) 0%, rgb(44,11,51) 100%)',    
        padding: '5rem 3rem',
    },
    projectList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
    }
  }

const ProjectContainer = () => {
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
        <Container style={style.wrapper} className='wrapperProjects'>
            <Subtitle subtitle='PROJECTS'/>
            <Container style={style.projectList} className='projectList'>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500}>
                    <Project content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."/>
                </Fade>
                <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000}>
                    <ProjectImage />
                </Fade>
            </Container>
        </Container>
    );
};

export default ProjectContainer;


