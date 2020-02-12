import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  style,
  constants,
  ProtectedRoute,
  ErrorPage,
} from '../env/utils/access';
import { connect } from 'react-redux';
import { actions } from '../env/utils/access';

// components
import AppNavbar from './components/AppNavbar/AppNavbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// page component
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Project from '../pages/Project/Project';
import Blog from '../pages/Blog/Blog';
import BlogPost from '../pages/BlogPost/BlogPost';
import Skills from '../pages/Skills/Skills';
import Contact from '../pages/Contact/Contact';
import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login/Login';

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
                      <Route
                        path={`${projectsRoute}/:id`}
                        exact
                        component={Project}
                      />
                      <Route path={skillsRoute} exact component={Skills} />
                      <Route path={blogRoute} exact component={Blog} />
                      <Route
                        path={`${blogRoute}/:id`}
                        exact
                        component={BlogPost}
                      />
                      <Route path={contactRoute} exact component={Contact} />
                      <ProtectedRoute path={adminRoute} component={Admin} />
                      <Route path={loginRoute} exact component={Login} />
                      <Route component={ErrorPage} />
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

export default connect(null, mapDispatchToProps)(App);
