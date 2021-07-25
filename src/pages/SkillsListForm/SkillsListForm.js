import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, constants, services } from '../../env/utils/access';

// components
import SkillsListFormView from './SkillsListFormView';

// actions
const { getSkillsList, postSkillsList, updateSkillsList } =
  actions.skillsActions;

// constants
const { skillsListFormLocalStorageKey, skillsListInitialState } = constants;

// services
const { localStorageService } = services;

// validation
const SkillsListFormValidationSchema = Yup.object().shape({
  topic: Yup.string().required('Must provide a topic'),
  stack: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required('Must provide a language'),
      longData: Yup.array().of(
        Yup.string().required('Must provide a language skill')
      ),
    })
  ),
});

class SkillsListForm extends Component {
  state = { isSubmit: false };

  componentDidMount = async () => {
    const { getSkillsList } = this.props;

    if (this.isUpdate()) {
      const id = this.getId();
      await getSkillsList(id);
    }
  };

  componentWillUnmount = () => {
    const { isSubmit } = this.state;
    if (isSubmit) {
      this.removeSkillsListState(skillsListFormLocalStorageKey);
    }
  };

  isSubmit = () => {
    this.setState((state) => (state.isSubmit = true));
  };

  postSkillsList = (skillsList) => {
    const { postSkillsList } = this.props;
    postSkillsList(skillsList);
  };

  updateSkillsList = (id, skillsList) => {
    const { updateSkillsList } = this.props;
    updateSkillsList(id, skillsList);
  };

  loadSkillsListState = (key) => {
    try {
      return localStorageService.loadData(key);
    } catch (err) {
      console.log(err);
    }
  };

  saveSkillsListState = (key, data) => {
    try {
      localStorageService.saveData(key, data);
    } catch (err) {
      console.log(err);
    }
  };

  removeSkillsListState = (key) => {
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
    const { skillsList } = this.props;

    let initialValues = {};

    if (this.isUpdate()) {
      initialValues = skillsList;
    } else {
      initialValues =
        this.loadSkillsListState(skillsListFormLocalStorageKey) ||
        skillsListInitialState;
    }

    return (
      <SkillsListFormView
        functions={{
          postSkillsList: this.postSkillsList,
          updateSkillsList: this.updateSkillsList,
          saveSkillsListState: this.saveSkillsListState,
          removeSkillsListState: this.removeSkillsListState,
          isSubmit: this.isSubmit,
        }}
        validation={SkillsListFormValidationSchema}
        state={{
          isUpdate: this.isUpdate(),
          id: this.getId(),
          initialValues,
          skillsList,
        }}
      />
    );
  }
}

const mapStateToProps = ({ skillsList }) => ({
  skillsList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSkillsList: (id) => dispatch(getSkillsList(id)),
  postSkillsList: (skillsList) =>
    dispatch(postSkillsList(skillsList, ownProps)),
  updateSkillsList: (id, skillsList) =>
    dispatch(updateSkillsList(id, skillsList, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsListForm);
