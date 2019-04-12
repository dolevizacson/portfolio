import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import '../../utils/icons';

import AppNavbar from '../AppNavbar/AppNavbar';
import Home from '../../pages/home';
import Projects from '../../pages/projects';
import Skills from '../../pages/skills';
import Contact from '../../pages/contact';
import Footer from '../Footer/Footer';
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  contactRoute,
} from '../../confing/routes';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <div className="app-container">
            <AppNavbar />
            <div className="ui">
              <Switch>
                <Route path={homeRoute} exact component={Home} />
                <Route path={projectsRoute} exact component={Projects} />
                <Route path={skillsRoute} exact component={Skills} />
                <Route path={contactRoute} exact component={Contact} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
