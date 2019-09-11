import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../../env/utils/access';

// components
import TaskListView from './TaskListView';

// actions
const { getTaskList } = actions.taskListActions;

class TaskList extends Component {
  componentDidMount = () => {
    const { getTaskList } = this.props;
    getTaskList();
  };

  render() {
    const { taskList, isLoading } = this.props;
    return <TaskListView state={{ taskList, isLoading }} />;
  }
}

const mapStateToProps = ({ taskList, isLoading }) => ({
  taskList,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  getTaskList: () => dispatch(getTaskList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
