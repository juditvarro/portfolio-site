import React from 'react';

const style = {
  project: {
    fontWeight: '900',
    fontSize: '1.5rem',
    color: 'rgb(144, 208, 218)',
    marginTop: '0%',
    marginBottom: '0%',
    paddingRight: '20%',
    justifyContent: 'center',
  }
}

const Project = (props) => {
  return (
    <div style={style.project} className='project'>
      <p>{props.content}</p>
    </div>
  );
};

export default Project;
