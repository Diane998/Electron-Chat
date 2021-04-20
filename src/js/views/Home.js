import React from 'react';
import JoinedChats from '../components/JoinedChats';
import AvailableChats from '../components/AvailableChats';
import Title from '../components/shared/Title';

const Home = () => {
  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <JoinedChats />
      </div>
      <div className='col-9 fh'>
        <Title />
        <AvailableChats />
      </div>
    </div>
  );
};

export default Home;
