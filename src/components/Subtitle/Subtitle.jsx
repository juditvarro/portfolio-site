import React from 'react';
import '../../styles/Subtitle.css';

const Subtitle = (props) => {
  return (
    <div className='subtitle'>
      <h1>{props.subtitle}</h1>
    </div>
  );
};

export default Subtitle;
