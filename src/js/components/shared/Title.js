import React from 'react';
import { useHistory } from 'react-router-dom';

const Title = () => {
  const history = useHistory();

  return (
    <div className='chat-name-container'>
      <span className='name'>Chat 1</span>
      <button
        onClick={() => history.push('/')}
        className='btn btn-primary btn-sm back-button'
      >
        Back
      </button>
    </div>
  );
};

export default Title;
