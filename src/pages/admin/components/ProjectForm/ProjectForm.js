import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, services } from '../../../../env/utils/access';

// components
import ProjectFormView from './ProjectFormView';

// actions
const { postProject, updateProject } = actions.projectsActions;

// services
const { localStorageService } = services;

const projectFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a project header'),
  summery: Yup.string().required('Must provide project summery'),
  description: Yup.string(),
  technologies: Yup.array().of(
    Yup.string().required('Must provide technology name')
  ),
  links: Yup.array().of(Yup.string().required('Must provide url')),
});

class ProjectForm extends Component {
  postProject = project => {
    const { postProject } = this.props;
    postProject(project);
  };

  updateProject = (id, project) => {
    const { updateProject } = this.props;
    updateProject(id, project);
  };

  loadProjectState = key => {
    try {
      return localStorageService.loadData(key);
    } catch (err) {
      console.log(err);
    }
  };

  saveProjectState = (key, data) => {
    try {
      localStorageService.saveData(key, data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { location } = this.props;
    return (
      <ProjectFormView
        state={{
          postProject: this.postProject,
          updateProject: this.updateProject,
          loadProjectState: this.loadProjectState,
          saveProjectState: this.saveProjectState,
          projectFormValidationSchema,
          location,
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postProject: project => dispatch(postProject(project, ownProps)),
  updateProject: (id, project) =>
    dispatch(updateProject(id, project, ownProps)),
});

export default connect(
  null,
  mapDispatchToProps
)(ProjectForm);
