import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, constants, services } from '../../env/utils/access';

// components
import ProjectFormView from './ProjectFormView';

// actions
const { getProject, postProject, updateProject } = actions.projectsActions;

// constants
const { projectFormLocalStorageKey, projectInitialState } = constants;

// services
const { localStorageService } = services;

const projectFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a project header'),
  summery: Yup.string().required('Must provide project summery'),
  description: Yup.string(),
  technologies: Yup.array().of(
    Yup.string().required('Must provide technology name')
  ),
  links: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Must provide link name'),
      url: Yup.string()
        .url('Must be valid url')
        .required('Must provide link address'),
    })
  ),
});

class ProjectForm extends Component {
  state = { isSubmit: false };

  componentDidMount = async () => {
    const { getProject } = this.props;

    if (this.isUpdate()) {
      const id = this.getId();
      await getProject(id);
    }
  };

  componentWillUnmount = () => {
    const { isSubmit } = this.state;
    if (isSubmit) {
      this.removeProjectState(projectFormLocalStorageKey);
    }
  };

  isSubmit = () => {
    this.setState((state) => (state.isSubmit = true));
  };

  postProject = (project) => {
    const { postProject } = this.props;
    postProject(project);
  };

  updateProject = (id, project) => {
    const { updateProject } = this.props;
    updateProject(id, project);
  };

  loadProjectState = (key) => {
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

  removeProjectState = (key) => {
    try {
      localStorageService.deleteData(key);
    } catch (err) {
      console.log(err);
    }
  };

  isUpdate = () => {
    const { location } = this.props;
    return location.pathname.split('/')[3] === 'update';
  };

  getId = () => {
    const { match } = this.props;
    return match.params.id;
  };

  render() {
    const { project } = this.props;

    let initialValues = {};

    if (this.isUpdate()) {
      initialValues = project;
    } else {
      initialValues =
        this.loadProjectState(projectFormLocalStorageKey) ||
        projectInitialState;
    }
    return (
      <ProjectFormView
        functions={{
          postProject: this.postProject,
          updateProject: this.updateProject,
          saveProjectState: this.saveProjectState,
          removeProjectState: this.removeProjectState,
          isSubmit: this.isSubmit,
        }}
        validation={projectFormValidationSchema}
        state={{
          isUpdate: this.isUpdate(),
          id: this.getId(),
          initialValues,
          project,
        }}
      />
    );
  }
}

const mapStateToProps = ({ project }) => ({
  project,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProject: (id) => dispatch(getProject(id)),
  postProject: (project) => dispatch(postProject(project, ownProps)),
  updateProject: (id, project) =>
    dispatch(updateProject(id, project, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
