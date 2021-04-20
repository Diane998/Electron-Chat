import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import NavBar from './components/NavBar';

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
          <Route path='/settings' exact component={() => <h1>Settings</h1>} />
          <Route path='/login' exact component={() => <h1>Log in</h1>} />
          <Route path='/register' exact component={() => <h1>register</h1>} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
