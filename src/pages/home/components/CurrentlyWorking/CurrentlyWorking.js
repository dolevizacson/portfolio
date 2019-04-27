import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// actions
import { getCurrentlyWorkingContent } from '../../services/actions';

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

class CurrentlyWorking extends React.Component {
  componentDidMount() {
    this.props.getCurrentlyWorkingContent();
  }

  renderTaskList = () => {
    const taskList = this.props.currentlyWorkingContent.content;
    if (taskList === undefined) {
      return <div />;
    } else {
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
    }
  };

  render() {
    return (
      <CurrentlyWorkingStyle>
        <TastsListContainerStyle>
          {this.renderTaskList()}
        </TastsListContainerStyle>
      </CurrentlyWorkingStyle>
    );
  }
}

const mapStateToProps = ({ currentlyWorkingContent }) => {
  return {
    currentlyWorkingContent,
  };
};

export default connect(
  mapStateToProps,
  {
    getCurrentlyWorkingContent,
  }
)(CurrentlyWorking);
