import React from 'react';
import '../../styles/Project.css';

const Project = (props) => {
  return (
    <div className='project'>
      <h1>{props.content}</h1>
    </div>
  );
};

export default Project;
