import React from 'react';
import { useHistory } from 'react-router-dom';

const Title = ({ text }) => {
  const history = useHistory();

  return (
    <div className='chat-name-container'>
      <span className='name'>{text}</span>
    </div>
  );
};

export default Title;
