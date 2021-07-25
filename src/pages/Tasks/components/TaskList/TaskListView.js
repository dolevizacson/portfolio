import React from 'react';
import styled from 'styled-components';
import {
  UiHeader,
  UiLoading,
  UiRequest,
  UiRequestError,
  UiTextMessage,
} from '../../../../env/utils/access';

// component
import Task from '../Task/Task';

// style
const TaskListStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 72rem) 1fr;
`;

const TaskListContainerStyle = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  grid-gap: var(--ui-grid-gap-1);
`;

const TaskListLoadingStyle = styled.div`
  grid-column: 1/-1;
  margin: var(--ui-loading-top-bottom-margin);
`;

const renderTaskList = (state, functions) => {
  if (state.taskList.length === 0) {
    return <UiTextMessage>No task at the moment</UiTextMessage>;
  }
  return state.taskList
    .sort((item1, item2) => Date.parse(item1.date) - Date.parse(item2.date))
    .sort((item1, item2) => {
      let item1IsDone = item1.isDone ? 1 : 0;
      let item2IsDone = item2.isDone ? 1 : 0;
      return item2IsDone - item1IsDone;
    })
    .map((task) => {
      return <Task key={task._id} state={task} functions={functions} />;
    });
};

const TaskListView = (props) => {
  const { state, requestName, functions } = props;

  return (
    <TaskListStyle>
      <TaskListContainerStyle>
        <UiRequest
          requestName={requestName}
          loadingAnimation={
            <TaskListLoadingStyle>
              <UiLoading />
            </TaskListLoadingStyle>
          }
          topComponent={<UiHeader>task list</UiHeader>}
          error={
            <UiRequestError
              errorMessage="Failed to load task list"
              request={functions.getTaskList}
            />
          }
        >
          {renderTaskList(state, functions)}
        </UiRequest>
      </TaskListContainerStyle>
    </TaskListStyle>
  );
};

export default TaskListView;
