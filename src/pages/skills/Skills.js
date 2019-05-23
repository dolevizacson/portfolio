import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import UiHeader from '../../components/UiHeader/UiHeader';
import MethodologyList from './components/MethodologyList/MethodologyList';

// actions
import { getSkillsListContent } from './actions/skillsActions';

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

const HeaderIconStyle = styled.img.attrs({
  src: '/skillsTitleImage.png',
  alt: 'stone-stack',
})`
  width: 100%;
  height: 100%;
`;

class Skills extends React.Component {
  componentDidMount() {
    this.props.getSkillsListContent();
  }

  render() {
    return (
      <SkillsStyle>
        <UiHeader text="Technology Stack And Stuff" icon={HeaderIconStyle} />
        <SkillsListContainerStyle>
          <MethodologyList list={this.props.skillsListContent} />
        </SkillsListContainerStyle>
      </SkillsStyle>
    );
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
