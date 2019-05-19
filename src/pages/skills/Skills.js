import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import SkillsListHeader from './components/SkillsListHeader/SkillsListHeader';
import MethodologyList from './components/MethodologyList/MethodologyList';

// actions
import { getSkillsListContent } from './services/actions';

// style
const SkillsStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
`;
const SkillsListContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 100%;
`;

class Skills extends React.Component {
  componentDidMount() {
    this.props.getSkillsListContent();
  }

  render() {
    if (!this.props.skillsListContent.content) {
      return <div />;
    } else {
      return (
        <SkillsStyle>
          <SkillsListHeader />
          <SkillsListContainerStyle>
            <MethodologyList list={this.props.skillsListContent.content} />
          </SkillsListContainerStyle>
        </SkillsStyle>
      );
    }
  }
}

const mapStateToProps = ({ skillsListContent }) => {
  return {
    skillsListContent,
  };
};

export default connect(
  mapStateToProps,
  {
    getSkillsListContent,
  }
)(Skills);
