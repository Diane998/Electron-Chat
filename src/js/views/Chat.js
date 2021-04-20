import React from 'react';
import ChatMessages from '../components/ChatMessages';
import ChatUserList from '../components/ChatUserList';
import Title from '../components/shared/Title';

const Chat = () => {
  return (
    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        <ChatUserList />
      </div>
      <div className='col-9 fh'>
        <Title />
        <ChatMessages />
      </div>
    </div>
  );
};

export default Chat;
