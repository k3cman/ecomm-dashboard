import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Drawer from './components/elements/Drawer';
import Main from './components/elements/Main';
import Landing from './components/pages/Landing';
import Orders from './components/pages/Orders';
import Statistics from './components/pages/Statistics';
import PageBuilder from './components/pages/PageBuilder';
import EmailBuilder from './components/pages/EmailBuilder';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Drawer />
          <Main>
            <Route path="/" exact component={Landing} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/stats" exact component={Statistics} />
            <Route path="/pagebuilder" exact component={PageBuilder} />
            <Route path="/emailbuilder" exact component={EmailBuilder} />
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;
