import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actions, UiHeader, UiLoading } from '../../../../env/utils/access';

// components
import Methodology from '../Methodology/Methodology';

// actions
const { getSkillsList } = actions.skillsActions;

const SkillsListStyle = styled.div`
  ${({ theme: { div } }) => div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const SkillsListContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;
const HeaderIconStyle = styled.img.attrs({
  src: '/skillsTitleImage.png',
  alt: 'stone-stack',
})`
  width: 100%;
  height: 100%;
`;
class SkillsList extends Component {
  state = { list: [], isExtended: false };

  componentDidMount = async () => {
    const { getSkillsList } = this.props;
    await getSkillsList();
    this.setState(state => ({
      list: this.props.skillsList,
    }));
  };

  renderOneMethodology = id => {
    const { list } = this.state;
    this.setState(state => ({
      list: list.filter(methodology => methodology._id === id),
      isExtended: true,
    }));
  };

  renderAllMethodologies = () => {
    const { skillsList } = this.props;
    this.setState(state => ({
      list: skillsList,
      isExtended: false,
    }));
  };

  renderMethodologyList = list => {
    const { isExtended } = this.state;
    return list.map((methodology, index) => {
      return (
        <Methodology
          key={index}
          content={methodology}
          isExtended={isExtended}
          choose={this.renderOneMethodology}
          close={this.renderAllMethodologies}
        />
      );
    });
  };

  render() {
    const { list } = this.state;
    const { isLoading } = this.props;

    return (
      <SkillsListStyle>
        {isLoading.READ_SKILLS_LIST && <UiLoading size={50} />}

        {!isLoading.READ_SKILLS_LIST && (
          <>
            <UiHeader
              text="Technology Stack And Stuff"
              icon={HeaderIconStyle}
            />
            <SkillsListContainerStyle>
              {this.renderMethodologyList(list)}
            </SkillsListContainerStyle>
          </>
        )}
      </SkillsListStyle>
    );
  }
}

const mapStateToProps = ({ skillsList, isLoading }) => ({
  skillsList,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  getSkillsList: () => dispatch(getSkillsList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsList);
