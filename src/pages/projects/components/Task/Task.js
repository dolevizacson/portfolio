import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { constants, actions } from '../../../../env/utils/access';

// component
import TaskView from './TaskView';

// actions
const { deleteTask, toggleTask } = actions.taskListActions;

// constants
const { adminRoute, taskListRoute } = constants;

class Task extends Component {
  state = { updateTask: false };

  deleteTask = id => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  updateTask = () => {
    this.setState(state => ({ updateTask: true }));
  };

  toggleTask = id => {
    const { toggleTask } = this.props;
    toggleTask(id);
  };

  render() {
    const { taskData, isLoggedIn, location } = this.props;
    const { updateTask } = this.state;

    if (updateTask)
      return (
        <Redirect
          to={{
            pathname: `${adminRoute}${taskListRoute}`,
            state: {
              from: location.pathname,
              task: taskData,
            },
          }}
        />
      );

    return (
      <TaskView
        state={{
          taskData,
          isLoggedIn,
          deleteTask: this.deleteTask,
          updateTask: this.updateTask,
          toggleTask: this.toggleTask,
        }}
      />
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });
const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(deleteTask(id)),
  toggleTask: id => dispatch(toggleTask(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Task)
);
