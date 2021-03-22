import React from 'react';

const style = {
  subtitle: {
    fontWeight: '900',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    color: 'rgb(144, 208, 218)',
    textShadow: '1px 2px rgb(240,117,98)',
    marginTop: '0%',
    marginBottom: '0%',
  }
}

const Subtitle = (props) => {
  return (
    <div style={style.subtitle} className='subtitle'>
      <h1>{props.subtitle}</h1>
    </div>
  );
};

export default Subtitle;
