import React from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChats from '../components/AvailableChats';
import Title from '../components/shared/Title';

const Home = () => {
  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <JoinedChatsList />
      </div>
      <div className='col-9 fh'>
        <Title text='Choose your channel' />
        <AvailableChats />
      </div>
    </div>
  );
};

export default Home;
