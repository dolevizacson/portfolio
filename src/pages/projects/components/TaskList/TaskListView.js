import React from 'react';
import { UiHeader, UiLoading } from '../../../../env/utils/access';

// component
import Task from '../Task/Task';

// style
import { TaskListStyle } from './TaskListStyle';

const renderTaskList = list => {
  return list.map((task, index) => {
    return <Task key={index} taskData={task} />;
  });
};

const TaskListView = ({ state: { taskList, isLoading } }) => {
  return (
    <TaskListStyle>
      {isLoading.READ_TASK_LIST && <UiLoading size={50} />}
      {!isLoading.READ_TASK_LIST && (
        <>
          <UiHeader text="Task List" />
          {renderTaskList(taskList)}
        </>
      )}
    </TaskListStyle>
  );
};

export default TaskListView;
