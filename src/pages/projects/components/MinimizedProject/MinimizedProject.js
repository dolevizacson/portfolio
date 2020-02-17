import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import MinimizedProjectView from './MinimizedProjectView';

class MinimizedProject extends Component {
  render() {
    const { projectData, isLoggedIn } = this.props;

    return (
      <MinimizedProjectView
        state={{
          projectData,
          isLoggedIn,
        }}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export default connect(mapStateToProps)(MinimizedProject);
