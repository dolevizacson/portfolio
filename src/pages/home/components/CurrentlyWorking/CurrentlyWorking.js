import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// content
import content from './staticContent';

// style
const CurrentlyWorkingStyle = styled(Flex)`
  padding-bottom: 10vh;
`;
const TastsListContainerStyle = styled(Flex).attrs({
  column: true,
  full: true,
})``;
const TaskStyle = styled(Flex).attrs({ column: true })`
  padding: 0.625rem;
  margin 0.625rem 0;
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);

  ${props => props.theme.BackgroundColor.black1}
`;
const TaskHeaderStyle = styled(Flex)`
  text-decoration-line: underline;
  font-weight: bold;
  font-size: 24px;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white3}
`;
const TaskBodyStyle = styled(Flex).attrs({ justifyBetween: true })``;
const BodyStyle = styled(Flex)`
  font-size: 24px;

  ${props => props.theme.font.font1}
  ${props => props.theme.color.white3}
`;
const TaskDoneIconStyle = styled(Flex).attrs({
  justifyEnd: true,
  alignEnd: true,
})``;
const DoneIconStyle = styled(Flex).attrs({ center: true })`
  border-radius: 0 0 10px 0;
  height: 30px;
  width: 30px;
  font-size: 24px;

  ${props => props.theme.color.red1}
  ${props => props.theme.BackgroundColor.white3}
`;

const renderTaskList = () => {
  const taskList = content.workingOn;
  return taskList.map((task, index) => {
    return (
      <TaskStyle key={index}>
        <TaskHeaderStyle>{task.header}</TaskHeaderStyle>
        <TaskBodyStyle>
          <BodyStyle>{task.description}</BodyStyle>
          {task.isDone && (
            <TaskDoneIconStyle>
              <DoneIconStyle>
                <FontAwesomeIcon icon="check" />
              </DoneIconStyle>
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
