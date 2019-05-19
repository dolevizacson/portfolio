import React from 'react';
import styled from 'styled-components';
import { Check } from 'styled-icons/fa-solid';

// content
import content from './staticContent';

// style
const CurrentlyWorkingStyle = styled.div`
  ${({ theme }) => theme.div}

  padding-top: 5vh;
  padding-bottom: 10vh;

  ${({ theme }) => theme.media.phone`
    padding: 2vh 0;
  `}
`;
const TastsListContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const TaskStyle = styled.div`
  ${({ theme }) => theme.div}

  padding: 12px;
  margin: 10px 0;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);

  ${({ theme }) => theme.BackgroundColor.black1}
`;
const TaskHeaderStyle = styled.div`
  ${({ theme }) => theme.div}

  text-decoration-line: underline;
  font-weight: bold;
  font-size: 1.5rem;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white3}
`;
const TaskBodyStyle = styled.div`
  ${({ theme }) => theme.div}

  justify-content: space-between;
`;
const BodyStyle = styled.div`
  ${({ theme }) => theme.div}

  font-size: 1.5rem;

  ${({ theme }) => theme.font.font1}
  ${({ theme }) => theme.color.white3}
`;
const TaskDoneIconStyle = styled.div`
  ${({ theme }) => theme.div}

  justify-content: flex-end;
  align-items: flex-end;
`;
const DoneFrameStyle = styled.div`
  ${({ theme }) => theme.div}

  border-radius: 10px;
  height: 33px;
  width: 33px;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;

  ${props => props.theme.BackgroundColor.white3}
`;

const DoneIconStyle = styled(Check)`
  height: 28px;
  width: 28px;

  ${props => props.theme.color.red1}
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
