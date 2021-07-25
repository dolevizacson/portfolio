import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import {
  UiTextBlock,
  UiButton,
  UiButtonsContainer,
} from '../../../../env/utils/access';

// icons
import { CheckSquare, Square } from '@styled-icons/feather';

const TaskStyle = styled.article``;

const TaskContainerStyle = styled(UiTextBlock)``;

const TaskHeaderStyle = styled.h2``;

const TaskDescriptionContainerStyle = styled.div`
  display: grid;
  grid-gap: var(--ui-grid-gap-2);
`;

const TaskDescriptionStyle = styled.p``;

const TaskDescriptionIconStyle = styled.div`
  ${(props) => props.isLoggedIn && `cursor: pointer;`}

  display: flex;
  justify-content: flex-end;

  ${StyledIconBase} {
    color: var(--ui-font-color-1);
    stroke-width: 2px;
    height: 5rem;
    width: 5rem;

    & > polyline {
      color: var(--ui-main-color-1);
      stroke-width: 3px;
    }
  }
`;

const deleteTask = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.deleteTask(id);
};

const updateTask = (props) => {
  const { state, functions } = props;
  const task = state;
  functions.updateTask(task);
};

const changeIsDone = (props) => {
  const { state, functions, isLoggedIn } = props;
  const id = state._id;
  const task = state;
  if (isLoggedIn) {
    functions.changeIsDone(id, task);
  }
};

const toggleTask = (props) => {
  const { state, functions } = props;
  const id = state._id;
  functions.toggleTask(id);
};

const Task = (props) => {
  const { state, isLoggedIn } = props;

  return (
    <TaskStyle>
      <TaskContainerStyle
        header={<TaskHeaderStyle>{state?.header}</TaskHeaderStyle>}
      >
        <TaskDescriptionContainerStyle>
          <TaskDescriptionStyle>{state?.description}</TaskDescriptionStyle>
          <TaskDescriptionIconStyle
            onClick={() => changeIsDone(props)}
            isLoggedIn={isLoggedIn}
          >
            {state?.isDone ? <CheckSquare /> : <Square />}
          </TaskDescriptionIconStyle>
        </TaskDescriptionContainerStyle>
        {isLoggedIn && (
          <UiButtonsContainer>
            <UiButton onClick={() => updateTask(props)}>update</UiButton>
            <UiButton onClick={() => deleteTask(props)}>delete</UiButton>
            <UiButton onClick={() => toggleTask(props)}>
              {state?.active !== 0 ? 'toggle off' : 'toggle on'}
            </UiButton>
          </UiButtonsContainer>
        )}
      </TaskContainerStyle>
    </TaskStyle>
  );
};

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export default connect(mapStateToProps)(Task);
