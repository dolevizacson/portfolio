import React from 'react';

// style
import {
  TaskStyle,
  TaskHeaderStyle,
  TaskBodyStyle,
  BodyStyle,
  TaskDoneIconStyle,
  DoneFrameStyle,
  DoneIconStyle,
  TaskDeleteButtonStyle,
  TaskToggleButtonStyle,
  TaskUpdateButtonStyle,
} from './TaskStyle';

const TaskView = ({
  state: { taskData, deleteTask, updateTask, toggleTask, isLoggedIn },
}) => {
  return (
    <TaskStyle>
      <TaskHeaderStyle>{taskData.header}</TaskHeaderStyle>
      <TaskBodyStyle>
        <BodyStyle>{taskData.description}</BodyStyle>
        {taskData.isDone !== 0 && (
          <TaskDoneIconStyle>
            <DoneFrameStyle>
              <DoneIconStyle />
            </DoneFrameStyle>
          </TaskDoneIconStyle>
        )}
      </TaskBodyStyle>
      {isLoggedIn && (
        <>
          <TaskDeleteButtonStyle onClick={() => deleteTask(taskData._id)}>
            Delete
          </TaskDeleteButtonStyle>
          <TaskToggleButtonStyle onClick={() => toggleTask(taskData._id)}>
            {taskData.isDone !== 0 ? 'Toggle off' : 'Toggle on'}
          </TaskToggleButtonStyle>
          <TaskUpdateButtonStyle onClick={updateTask}>
            Update
          </TaskUpdateButtonStyle>
        </>
      )}
    </TaskStyle>
  );
};

export default TaskView;
