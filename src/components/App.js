import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

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
          <Container className="app-container" fluid>
            <AppNavbar />
            <Switch>
              <Route path={homeRoute} exact component={Home} />
              <Route path={projectsRoute} exact component={Projects} />
              <Route path={skillsRoute} exact component={Skills} />
              <Route path={contactRoute} exact component={Contact} />
            </Switch>
            <Footer />
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
