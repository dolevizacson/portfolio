import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, services } from '../../../../env/utils/access';

// components
import SkillsListFormView from './SkillsListFormView';

// actions
const { postSkillsList, updateSkillsList } = actions.skillsActions;

// services
const { localStorageService } = services;

const SkillsListFormValidationSchema = Yup.object().shape({
  topic: Yup.string().required('Must provide a topic'),
  image: Yup.string().required('Must provide an image path'),
  stack: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().required('Must provide a language'),
      longData: Yup.array().of(Yup.string()),
    })
  ),
});

class SkillsListForm extends Component {
  postSkillsList = skillsList => {
    const { postSkillsList } = this.props;
    postSkillsList(skillsList);
  };

  updateSkillsList = (id, skillsList) => {
    const { updateSkillsList } = this.props;
    updateSkillsList(id, skillsList);
  };

  loadSkillsListState = key => {
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

  render() {
    const { location } = this.props;
    return (
      <SkillsListFormView
        state={{
          postSkillsList: this.postSkillsList,
          updateSkillsList: this.updateSkillsList,
          loadSkillsListState: this.loadSkillsListState,
          saveSkillsListState: this.saveSkillsListState,
          SkillsListFormValidationSchema,
          location,
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postSkillsList: skillsList => dispatch(postSkillsList(skillsList, ownProps)),
  updateSkillsList: (id, skillsList) =>
    dispatch(updateSkillsList(id, skillsList, ownProps)),
});

export default connect(
  null,
  mapDispatchToProps
)(SkillsListForm);
