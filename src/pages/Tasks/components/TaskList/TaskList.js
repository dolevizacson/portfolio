import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { constants, actions, types } from '../../../../env/utils/access';

// components
import TaskListView from './TaskListView';

// actions
const { getTaskList, getActiveTaskList, deleteTask, updateTask, toggleTask } =
  actions.taskListActions;

// constants
const { adminRoute, tasksRoute, updateRoute } = constants;

// types
const { taskList: taskListTypes } = types;

class TaskList extends Component {
  componentDidMount = () => {
    this.getTaskList();
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      this.getTaskList();
    }
  };

  getTaskList = () => {
    const { init, isLoggedIn, getTaskList, getActiveTaskList } = this.props;
    if (init) {
      isLoggedIn ? getTaskList() : getActiveTaskList();
    }
  };

  deleteTask = (id) => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  updateTask = (task) => {
    const { history } = this.props;
    history.push(`${adminRoute}${tasksRoute}${updateRoute}/${task._id}`);
  };

  toggleTask = (id) => {
    const { toggleTask } = this.props;
    toggleTask(id);
  };

  changeIsDone = (id, task) => {
    const { updateTask } = this.props;
    const isDone = !task.isDone;
    updateTask(id, { ...task, isDone });
  };

  render() {
    const { taskList, isLoggedIn } = this.props;
    return (
      <TaskListView
        state={{ taskList }}
        requestName={
          isLoggedIn ? taskListTypes.readAll : taskListTypes.readAllActive
        }
        functions={{
          getTaskList: this.getTaskList,
          deleteTask: this.deleteTask,
          updateTask: this.updateTask,
          changeIsDone: this.changeIsDone,
          toggleTask: this.toggleTask,
        }}
      />
    );
  }
}

const mapStateToProps = ({ taskList, init, isLoggedIn }) => ({
  taskList,
  init,
  isLoggedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTaskList: () => dispatch(getTaskList()),
  getActiveTaskList: () => dispatch(getActiveTaskList()),
  deleteTask: (id) => dispatch(deleteTask(id)),
  updateTask: (id, task) => dispatch(updateTask(id, task, ownProps)),
  toggleTask: (id) => dispatch(toggleTask(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TaskList)
);
