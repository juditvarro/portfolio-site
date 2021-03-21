import React from 'react';
import '../../styles/Intro.css';

const Intro = (props) => {
  return (
    <div className='intro'>
      <p>Hi! My name is {props.name} and this is my new website.</p>
    </div>
  );
};

export default Intro;
