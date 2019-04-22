import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import GlobalStyle from './GlobalStyle';

import './App.css';
import '../../utils/icons';

// components
import AppNavbar from '../AppNavbar/AppNavbar';
import Main from '../Main/Main';
import Home from '../../pages/home';
import Projects from '../../pages/projects';
import Skills from '../../pages/skills';
import Contact from '../../pages/contact';
import Footer from '../Footer/Footer';

// constants
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  contactRoute,
} from '../../confing/routes';

const AppStyle = styled(Flex).attrs({ column: true })``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <BrowserRouter>
          <>
            <AppNavbar />
            <Main>
              <Switch>
                <Route path={homeRoute} exact component={Home} />
                <Route path={projectsRoute} exact component={Projects} />
                <Route path={skillsRoute} exact component={Skills} />
                <Route path={contactRoute} exact component={Contact} />
              </Switch>
            </Main>
            <Footer />
          </>
        </BrowserRouter>
      </AppStyle>
    </>
  );
};

export default App;
