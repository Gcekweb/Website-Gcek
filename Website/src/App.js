import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/component/Navbar";

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/component/Home';
import Department from './Components/component/Department';
import Event from './Components/component/Event';
import Admission from './Components/component/Admission';
import TP from './Components/component/TP';
import Library from './Components/component/Library';
import Notification from './Components/component/Notification';
import Campus from './Components/component/Campus';
import Footer from './Components/component/Footer';
import Sign from './Components/component/Sign';
import Login from './Components/component/Login';


class App extends Component {
  render() {
    return (
      <container>
        <BrowserRouter>
          <div className="content">
            <Navbar />

            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/department" component={Department} />
              <Route path="/ event" component={Event} />
              <Route path="/admission" component={Admission} />
              <Route path="/tp" component={TP} />
              <Route path="/library" component={Library} />
              <Route path="/notification" component={Notification} />
              <Route path="/campus" component={Campus} />
              <Route path="/sign" component={Sign} />
              <Route path="/login" component={Login} />
              <Route component={Error} />
            </Switch>

          </div>
          <Footer />
        </BrowserRouter>

      </container>

    );
  }
}

export default App;

