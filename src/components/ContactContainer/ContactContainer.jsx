import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer'
import Subtitle from '../Subtitle/Subtitle';
import { CgTwitter } from 'react-icons/cg';
import { VscGithub } from 'react-icons/vsc';
import { RiLinkedinFill, RiFacebookFill } from 'react-icons/ri';
import '../../styles/WrapperContact.css';

const ContactContainer = () => {
    return (
            <Container className='wrapperContact'>
                <Subtitle subtitle='CONTACT' />
                <Container className='contactinfo'>
                    <Fade bottom duration={1000} delay={800} distance='30px'>
                        <div className='contact'>
                            <p className='contact_text'>
                                {'Feel free to use the buttons below!'}
                            </p>
                            <div className='buttongroup'>
                                <>
                                    <Button
                                        className='button button-resume'
                                        href='https://github.com/juditvarro?tab=repositories'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        aria-label='facebook_connection'>
                                        <RiFacebookFill />
                                    </Button>
                                    <Button
                                        className='button button-resume'
                                        href='https://github.com/juditvarro?tab=repositories'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        aria-label='github_connection'>
                                        <VscGithub />
                                    </Button>
                                    <Button
                                        className='button button-resume'
                                        href='https://github.com/juditvarro?tab=repositories'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        aria-label='linkedin_connection'>
                                        <RiLinkedinFill />
                                    </Button>
                                    <Button
                                        className='button button-resume'
                                        href='https://github.com/juditvarro?tab=repositories'
                                        rel='noopener noreferrer'
                                        target='_blank'
                                        aria-label='twitter_connection'>
                                        <CgTwitter />
                                    </Button>
                                </>
                            </div>
                        </div>
                    </Fade>
                </Container>
                <Footer />
            </Container>
    );
};

export default ContactContainer;


