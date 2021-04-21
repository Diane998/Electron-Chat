import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Settings from './views/Settings';
import Welcome from './views/Welcome';
import Chat from './views/Chat';

const App = () => {
  // const sendNotification = () => {
  //   electron.notificationApi.sendNotification('THis is my message');
  // };

  return (
    <HashRouter>
      <NavBar />
      <div className='content-wrapper'>
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/home' component={Home} />
          <Route path='/settings' component={Settings} />
          <Route path='/chat/:id' component={Chat} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
