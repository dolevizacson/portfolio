import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CurrentlyWorking.css';

import { loadCurrentlyWorkingContent } from '../../services/actions';

class CurrentlyWorking extends React.Component {
  componentDidMount() {
    this.props.loadCurrentlyWorkingContent();
  }

  renderTaskList = () => {
    const taskList = this.props.currentlyWorking.currentlyWorkingContent;
    if (taskList === undefined) {
      return <div />;
    } else {
      return this.props.currentlyWorking.currentlyWorkingContent.map(task => {
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
    }
  };

  render() {
    return (
      <div className="currently-working-on">
        <div className="task-list-container">{this.renderTaskList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentlyWorking: state.currentlyWorking,
  };
};

export default connect(
  mapStateToProps,
  {
    loadCurrentlyWorkingContent,
  }
)(CurrentlyWorking);
