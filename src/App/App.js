import React, { Component } from 'react';
import styled from 'styled-components';
import { style } from '../env/utils/access';
import { connect } from 'react-redux';
import { actions } from '../env/utils/access';

// components
import AppNavbar from './components/AppNavbar/AppNavbar';
import Main from './components/Main/Main';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

// style
const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

// actions
const { isLoggedIn } = actions.authActions;

// global style
const { MainTheme } = style;
const { GlobalStyle } = style;

class App extends Component {
  componentDidMount = async () => {
    const { isLoggedIn } = this.props;
    await isLoggedIn();
  };

  render() {
    return (
      <>
        <MainTheme>
          <GlobalStyle />
          <AppStyle>
            <AppNavbar />
            <Main>
              <Routes />
            </Main>
            <Footer />
          </AppStyle>
        </MainTheme>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => dispatch(isLoggedIn()),
});

export default connect(null, mapDispatchToProps)(App);
