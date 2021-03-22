import React from 'react';

const style = {
  intro: {
    fontWeight: '900',
    fontSize: '2rem',
    color: 'rgb(144, 208, 218)',
    marginTop: '0%',
    marginBottom: '0%',
    paddingLeft: '5%',
    paddingTop: '2%',
  }
}

const Intro = (props) => {
  return (
    <div style={style.intro} className='intro'>
      <p>Hi! My name is {props.name} and this is my new website.</p>
    </div>
  );
};

export default Intro;
