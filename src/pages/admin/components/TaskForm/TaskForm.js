import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, services } from '../../../../env/utils/access';

// components
import TaskFormView from './TaskFormView';

// actions
const { postTask, updateTask } = actions.taskListActions;

// services
const { localStorageService } = services;

const TaskFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a task header'),
  description: Yup.string().required('Must provide task description'),
});

class Taskform extends Component {
  postTask = task => {
    const { postTask } = this.props;
    postTask(task);
  };

  updateTask = (id, task) => {
    const { updateTask } = this.props;
    updateTask(id, task);
  };

  loadTaskState = key => {
    try {
      return localStorageService.loadData(key);
    } catch (err) {
      console.log(err);
    }
  };

  saveTaskState = (key, data) => {
    try {
      localStorageService.saveData(key, data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { location } = this.props;
    return (
      <TaskFormView
        state={{
          postTask: this.postTask,
          updateTask: this.updateTask,
          loadTaskState: this.loadTaskState,
          saveTaskState: this.saveTaskState,
          TaskFormValidationSchema,
          location,
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postTask: task => dispatch(postTask(task, ownProps)),
  updateTask: (id, task) => dispatch(updateTask(id, task, ownProps)),
});

export default connect(
  null,
  mapDispatchToProps
)(Taskform);
