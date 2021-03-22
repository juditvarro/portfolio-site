import React from 'react';

const style = {
  title: {
    fontWeight: '900',
    fontSize: '1.75rem',
    textTransform: 'uppercase',
    color: 'rgb(144, 208, 218)',
    textShadow: '1px 2px rgb(240,117,98)',
    marginTop: '0%',
    marginBottom: '0%',
    paddingLeft: '5%',
  }
}

const Title = (props) => {
  return (
    <div style={style.title} className='title'>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
