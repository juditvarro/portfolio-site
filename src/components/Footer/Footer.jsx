import React from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import { BiUpArrowCircle } from 'react-icons/bi';
import '../../styles/Footer.css';
import '../../styles/WrapperContainer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className='navigationdiv'>
                    <span className="back-to-top">
                        <Link to="hero" smooth duration={1000}>
                            <BiUpArrowCircle className="uparrow" aria-hidden="true" />
                        </Link>
                    </span>
                </div>
                <hr className='hr' />
                <p className="footer_text">
                    © {new Date().getFullYear()} - Developed by{' '}
                    <a className='githubLink' href="https://github.com/juditvarro?tab=repositories" target="_blank" rel="noopener noreferrer">
                        Judit Varro
            </a>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;


