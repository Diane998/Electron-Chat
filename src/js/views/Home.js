import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../redux/chats/chatActions';

import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChats from '../components/AvailableChats';
import Title from '../components/shared/Title';

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats.items);

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <JoinedChatsList chats={chats} />
      </div>
      <div className='col-9 fh'>
        <Title text='Choose your channel' />
        <AvailableChats chats={chats} />
      </div>
    </div>
  );
};

export default Home;
