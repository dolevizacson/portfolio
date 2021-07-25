import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import AppNavbarView from './AppNavbarView';

class AppNavbar extends Component {
  state = { showIcon: false, isCollapse: true };

  componentDidMount() {
    window.addEventListener('resize', this.checkWidth);
    this.checkWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWidth);
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 768) {
      this.setState((state) => ({
        showIcon: true,
      }));
    } else {
      this.setState((state) => ({
        showIcon: false,
        isCollapse: true,
      }));
    }
  };

  toggleNavbarMenu = () =>
    this.setState((state) => ({
      isCollapse: !this.state.isCollapse,
    }));

  render() {
    const { isLoggedIn } = this.props;

    return (
      <AppNavbarView
        state={{
          ...this.state,
          isLoggedIn,
          toggleNavbarMenu: this.toggleNavbarMenu,
        }}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(AppNavbar);
