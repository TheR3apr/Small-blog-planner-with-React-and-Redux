import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignedIn';
import SignUp from './components/auth/SignedUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
