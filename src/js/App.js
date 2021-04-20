import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import Settings from './views/Settings';
import Login from './views/Login';
import Register from './views/Register';
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
          <Route path='/' exact component={Home} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
