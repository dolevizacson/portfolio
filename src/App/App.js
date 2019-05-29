import React from 'react';
import { style, constants } from '../env/utils/access';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// components
import AppNavbar from './components/AppNavbar/AppNavbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// page component
import Home from '../pages/home/Home';
import Projects from '../pages/projects';
import Blog from '../pages/blog/Blog';
import Skills from '../pages/skills/Skills';
import Contact from '../pages/contact';
import Admin from '../pages/admin/Admin';
import Login from '../pages/login/Login';

// constants
const {
  homeRoute,
  projectsRoute,
  skillsRoute,
  blogRoute,
  contactRoute,
  adminRoute,
  loginRoute,
} = constants;

// global style
const MainTheme = style.MainTheme;
const GlobalStyle = style.GlobalStyle;

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
                    <Route path={blogRoute} exact component={Blog} />
                    <Route path={contactRoute} exact component={Contact} />
                    <ProtectedRoute path={adminRoute} exact component={Admin} />
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