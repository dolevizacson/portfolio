import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CurrentlyWorking.css';

const CurrentlyWorking = props => {
  const { workingOn } = props.home.homeContent;
  const renderTaskList = () => {
    return workingOn.map(task => {
      return (
        <div className="task-container" key={task.header}>
          <div className="task-container-header">{task.header}</div>
          <div>{task.description}</div>
          {task.isDone && (
            <div className="task-container-done">
              <div className="done">
                <FontAwesomeIcon icon="check" />
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="currently-working-on">
      <div className="task-list-container">{renderTaskList()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    home: state.loadHomeContentReducer,
  };
};

export default connect(mapStateToProps)(CurrentlyWorking);
