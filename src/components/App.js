import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Home from '../scenes/home';
import Projects from '../scenes/projects';
import Skills from '../scenes/skills';
import Contact from '../scenes/contact';
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  contactRoute,
} from '../confings/routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path={homeRoute} exact component={Home} />
            <Route path={projectsRoute} exact component={Projects} />
            <Route path={skillsRoute} exact component={Skills} />
            <Route path={contactRoute} exact component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
