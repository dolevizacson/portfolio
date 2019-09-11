import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { style, constants, ProtectedRoute } from '../env/utils/access';
import { connect } from 'react-redux';
import { actions } from '../env/utils/access';

// components
import AppNavbar from './components/AppNavbar/AppNavbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// page component
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import Blog from '../pages/blog/Blog';
import Skills from '../pages/skills/Skills';
import Contact from '../pages/contact';
import Admin from '../pages/admin/Admin';
import Login from '../pages/login/Login';

// style
import { AppStyle } from './AppStyle';

// actions
const { isLoggedIn } = actions.authActions;

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
const { MainTheme } = style;
const { GlobalStyle } = style;

class App extends Component {
  componentDidMount = () => {
    const { isLoggedIn } = this.props;
    isLoggedIn();
  };

  render() {
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
                      <ProtectedRoute path={adminRoute} component={Admin} />
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
  }
}

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(isLoggedIn()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
