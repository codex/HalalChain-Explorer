import React, { Component } from 'react';
import '../style/App.css';
import Index from '../components/Index';
import Head from '../common/Head';
import Foot from '../common/Foot';
import Blockinfo from '../components/Blockinfo';
import Blocklist from '../components/Blocklist';
import Missmatching from '../components/Missmatching';
import Transactioninfo from '../components/Transactioninfo';
import Transactionlist from '../components/Transactionlist';
import Notfound from '../components/Notfound';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Route path="/" component={Head} />
            <div className="pageContent">
              <Switch>
                <Redirect exact="/" from="/" to="/index" />
                <Route path="/index" component={Index} />
                {/* <Route path="/blockinfo" component={Blockinfo} />
                <Route path="/blocklist" component={Blocklist} />
                <Route path="/missmatching" component={Missmatching} />
                <Route path="/transactioninfo" component={Transactioninfo} />
                <Route path="/transactionlist" component={Transactionlist} /> */}
                <Route path="/notfound" component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
        <Foot />
      </div>
    );
  }
}
export default App;
