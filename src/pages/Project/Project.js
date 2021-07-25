import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { constants, actions, types } from '../../env/utils/access';

// components
import ProjectView from './ProjectView';

// types
const { projects: projectsTypes } = types;

// actions
const { getProject, getActiveProject, deleteProject, toggleProject } =
  actions.projectsActions;

// constants
const { adminRoute, projectsRoute, updateRoute } = constants;

class Project extends Component {
  componentDidMount = () => {
    this.getProject();
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      this.getProject();
    }
  };

  getProject = () => {
    const { init, isLoggedIn, getProject, getActiveProject, location } =
      this.props;
    if (init) {
      const id = location.pathname.split('/')[2];
      isLoggedIn ? getProject(id) : getActiveProject(id);
    }
  };

  deleteProject = (id) => {
    const { deleteProject } = this.props;
    deleteProject(id);
  };

  updateProject = (project) => {
    const { history } = this.props;
    history.push(`${adminRoute}${projectsRoute}${updateRoute}/${project._id}`);
  };

  toggleProject = (id) => {
    const { toggleProject } = this.props;
    toggleProject(id);
  };

  render() {
    const { project, isLoggedIn } = this.props;

    return (
      <ProjectView
        state={project}
        requestName={isLoggedIn ? projectsTypes.read : projectsTypes.readActive}
        functions={{
          getProject: this.getProject,
          deleteProject: this.deleteProject,
          updateProject: this.updateProject,
          toggleProject: this.toggleProject,
        }}
      />
    );
  }
}

const mapStateToProps = ({ project, init, isLoggedIn }) => ({
  project,
  init,
  isLoggedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProject: (id) => dispatch(getProject(id)),
  getActiveProject: (id) => dispatch(getActiveProject(id)),
  deleteProject: (id) => dispatch(deleteProject(id, ownProps)),
  toggleProject: (id) => dispatch(toggleProject(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Project)
);
