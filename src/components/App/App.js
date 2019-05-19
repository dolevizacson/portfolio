import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../style/GlobalStyle';
import MainTheme from '../../style/MainTheme';
import '../../utils/icons';

// components
import AppNavbar from '../AppNavbar/AppNavbar';
import Main from '../Main/Main';
import Home from '../../pages/home/Home';
import Projects from '../../pages/projects';
import Skills from '../../pages/skills/Skills';
import Contact from '../../pages/contact';
import Admin from '../../pages/admin/Admin';
import Login from '../../pages/login/Login';
import Footer from '../Footer/Footer';

// constants
import {
  homeRoute,
  projectsRoute,
  skillsRoute,
  contactRoute,
  adminRoute,
  loginRoute,
} from '../../confing/routes';

// style
const AppStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <MainTheme>
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
                    <Route path={adminRoute} exact component={Admin} />
                    <Route path={loginRoute} exact component={Login} />
                  </Switch>
                </Main>
                <Footer />
              </>
            </BrowserRouter>
          </AppStyle>
        </>
      </MainTheme>
    </>
  );
};

export default App;
