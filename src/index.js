import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import About from './About';
import Inbox, { Message } from './Inbox';
import App from './App.jsx';
import Home from './Home';

import './index.css';

ReactDOM.render((
  // <About />
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/message/:id" component={Message} />
        <Route render={() => <h6>404</h6>} />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

