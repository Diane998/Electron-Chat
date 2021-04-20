import React from 'react';

const App = () => {
  const sendNotification = () => {
    electron.notificationApi.sendNotification('THis is my message');
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={sendNotification}>Send notification</button>
    </>
  );
};

export default App;
