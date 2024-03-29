import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, types } from '../../../../env/utils/access';

// components
import ProjectsListView from './ProjectsListview';

// actions
const { getActiveProjects, getProjects } = actions.projectsActions;

// types
const { projects: projectsTypes } = types;

class ProjectsList extends Component {
  componentDidMount = () => {
    this.getProjects();
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      this.getProjects();
    }
  };

  getProjects = () => {
    const { init, isLoggedIn, getActiveProjects, getProjects } = this.props;
    if (init) {
      isLoggedIn ? getProjects() : getActiveProjects();
    }
  };

  render() {
    const { projectsList, isLoggedIn } = this.props;

    return (
      <ProjectsListView
        state={{ projectsList }}
        requestName={
          isLoggedIn ? projectsTypes.readAll : projectsTypes.readAllActive
        }
        functions={{ getProjects: this.getProjects }}
      />
    );
  }
}

const mapStateToProps = ({ projectsList, isLoggedIn, init }) => ({
  projectsList,
  isLoggedIn,
  init,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getProjects()),
  getActiveProjects: () => dispatch(getActiveProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
