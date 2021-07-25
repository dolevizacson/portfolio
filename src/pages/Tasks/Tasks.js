import React from 'react';
import styled from 'styled-components';

// components
import TaskList from './components/TaskList/TaskList';

// style
const TasksStyle = styled.div`
  display: grid;
`;

const Tasks = () => {
  return (
    <TasksStyle>
      <TaskList />
    </TasksStyle>
  );
};

export default Tasks;
