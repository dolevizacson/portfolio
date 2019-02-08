import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import '../utils/icons';

import AppNavbar from './AppNavbar';
import Home from '../scenes/home';
import Projects from '../scenes/projects';
import Skills from '../scenes/skills';
import Contact from '../scenes/contact';
import Footer from './Footer';
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  contactRoute,
} from '../confings/routes';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <div className="app-container">
            <AppNavbar />
            <Switch>
              <Route path={homeRoute} exact component={Home} />
              <Route path={projectsRoute} exact component={Projects} />
              <Route path={skillsRoute} exact component={Skills} />
              <Route path={contactRoute} exact component={Contact} />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
