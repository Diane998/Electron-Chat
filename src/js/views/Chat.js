import React from 'react';
import { useParams } from 'react-router-dom';
import ChatMessages from '../components/ChatMessages';
import ChatUserList from '../components/ChatUserList';
import Title from '../components/shared/Title';

const Chat = () => {
  const { id } = useParams();

  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <ChatUserList />
      </div>
      <div className='col-9 fh'>
        <Title text={`Joined channel: ${id}`} />
        <ChatMessages />
      </div>
    </div>
  );
};

export default Chat;
