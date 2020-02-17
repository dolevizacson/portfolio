import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions, types } from '../../env/utils/access';

// components
import ProjectView from './ProjectView';

// types
const { projects: projectsTypes } = types;

// actions
const { getProject, deleteProject, toggleProject } = actions.projectsActions;

// constants
const { adminRoute, projectsRoute } = constants;

class Project extends Component {
  state = { updateProject: false };

  componentDidMount = () => {
    const { getProject, location } = this.props;
    const id = location.pathname.split('/')[2];
    getProject(id);
  };

  deleteProject = id => {
    const { deleteProject } = this.props;
    deleteProject(id);
  };

  updateProject = () => {
    this.setState(state => ({ updateProject: true }));
  };

  toggleProject = id => {
    const { toggleProject } = this.props;
    toggleProject(id);
  };

  render() {
    const { project, isLoggedIn, location } = this.props;
    const { updateProject } = this.state;

    if (updateProject)
      return (
        <Redirect
          push
          to={{
            pathname: `${adminRoute}${projectsRoute}`,
            state: {
              from: location.pathname,
              project,
            },
          }}
        />
      );

    return (
      <ProjectView
        state={{
          project,
          isLoggedIn,
          deleteProject: this.deleteProject,
          updateProject: this.updateProject,
          toggleProject: this.toggleProject,
        }}
        requestName={projectsTypes.read}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn, project }) => ({
  isLoggedIn,
  project,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getProject: id => dispatch(getProject(id)),
  deleteProject: id => dispatch(deleteProject(id, ownProps)),
  toggleProject: id => dispatch(toggleProject(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Project)
);
