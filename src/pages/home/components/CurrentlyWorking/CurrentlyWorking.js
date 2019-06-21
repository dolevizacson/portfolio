import React from 'react';

// content
import content from './staticContent';

// style
import {
  TaskStyle,
  TaskHeaderStyle,
  TaskBodyStyle,
  BodyStyle,
  TaskDoneIconStyle,
  DoneFrameStyle,
  DoneIconStyle,
  CurrentlyWorkingStyle,
  TastsListContainerStyle,
} from './CurrentlyWorkingStyle';

const renderTaskList = () => {
  const { workingOn } = content;
  return workingOn.map((task, index) => {
    return (
      <TaskStyle key={index}>
        <TaskHeaderStyle>{task.header}</TaskHeaderStyle>
        <TaskBodyStyle>
          <BodyStyle>{task.description}</BodyStyle>
          {task.isDone && (
            <TaskDoneIconStyle>
              <DoneFrameStyle>
                <DoneIconStyle />
              </DoneFrameStyle>
            </TaskDoneIconStyle>
          )}
        </TaskBodyStyle>
      </TaskStyle>
    );
  });
};

const CurrentlyWorking = () => {
  return (
    <CurrentlyWorkingStyle>
      <TastsListContainerStyle>{renderTaskList()}</TastsListContainerStyle>
    </CurrentlyWorkingStyle>
  );
};

export default CurrentlyWorking;
