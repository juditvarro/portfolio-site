import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Project from '../Project/Project';
import ProjectImage from '../ProjectImage/ProjectImage';
import Subtitle from '../Subtitle/Subtitle';
import '../../styles/WrapperProjects.css';
import '../../styles/ProjectList.css';

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
        <Container className='wrapperProjects'>
            <Subtitle subtitle='PROJECTS'/>
            <Container className='projectList'>
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


