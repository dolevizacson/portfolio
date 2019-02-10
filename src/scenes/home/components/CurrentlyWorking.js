import React from 'react';
import { connect } from 'react-redux';

import './CurrentlyWorking.css';

const CurrentlyWorking = props => {
  const { taskListContent } = props.taskList;
  const renderTaskList = () => {
    return taskListContent.map(task => {
      return (
        <div key={task.header}>
          <div>{task.header}</div>
          <div>{task.description}</div>
          {task.isDone && <div>task is done</div>}
        </div>
      );
    });
  };

  return (
    <div className="currently-working-on">
      <div className="task-container">{renderTaskList()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.loadTaskListContentReducer,
  };
};

export default connect(mapStateToProps)(CurrentlyWorking);
