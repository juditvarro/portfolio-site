import React from 'react';
import '../../styles/Project.css';

const Project = (props) => {
  return (
    <div className='project'>
      <p>{props.content}</p>
    </div>
  );
};

export default Project;
