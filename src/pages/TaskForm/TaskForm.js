import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions, constants, services } from '../../env/utils/access';

// components
import TaskFormView from './TaskFormView';

// actions
const { getTask, postTask, updateTask } = actions.taskListActions;

// constants
const { taskFormLocalStorageKey, taskInitialState } = constants;

// services
const { localStorageService } = services;

const TaskFormValidationSchema = Yup.object().shape({
  header: Yup.string().required('Must provide a task header'),
  description: Yup.string().required('Must provide task description'),
});

class TaskForm extends Component {
  state = { isSubmit: false };

  componentDidMount = async () => {
    const { getTask } = this.props;

    if (this.isUpdate()) {
      const id = this.getId();
      await getTask(id);
    }
  };

  componentWillUnmount = () => {
    const { isSubmit } = this.state;
    if (isSubmit) {
      this.removeTaskState(taskFormLocalStorageKey);
    }
  };

  isSubmit = () => {
    this.setState((state) => (state.isSubmit = true));
  };

  postTask = (task) => {
    const { postTask } = this.props;
    postTask(task);
  };

  updateTask = (id, task) => {
    const { updateTask } = this.props;
    updateTask(id, task);
  };

  loadTaskState = (key) => {
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

  removeTaskState = (key) => {
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
    const { task } = this.props;

    let initialValues = {};

    if (this.isUpdate()) {
      initialValues = task;
    } else {
      initialValues =
        this.loadTaskState(taskFormLocalStorageKey) || taskInitialState;
    }
    return (
      <TaskFormView
        functions={{
          postTask: this.postTask,
          updateTask: this.updateTask,
          saveTaskState: this.saveTaskState,
          removeTaskState: this.removeTaskState,
          isSubmit: this.isSubmit,
        }}
        validation={TaskFormValidationSchema}
        state={{
          isUpdate: this.isUpdate(),
          id: this.getId(),
          initialValues,
          task,
        }}
      />
    );
  }
}

const mapStateToProps = ({ task }) => ({
  task,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTask: (id) => dispatch(getTask(id)),
  postTask: (task) => dispatch(postTask(task, ownProps)),
  updateTask: (id, task) => dispatch(updateTask(id, task, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
