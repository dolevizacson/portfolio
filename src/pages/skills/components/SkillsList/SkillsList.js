import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actions, UiHeader, UiLoading } from '../../../../env/utils/access';

// components
import Methodology from '../Methodology/Methodology';

// actions
const getSkillsList = actions.skillsActions.getSkillsList;

const SkillsListStyle = styled.div`
  ${({ theme }) => theme.div}

  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const SkillsListContainerStyle = styled.div`
  ${({ theme }) => theme.div}

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
    await this.props.getSkillsList();
    this.setState(state => {
      return { list: this.props.skillsList };
    });
  };

  renderOneMethodology = id => {
    this.setState(state => {
      return {
        list: this.state.list.filter(methodology => methodology._id === id),
        isExtended: true,
      };
    });
  };

  renderAllMethodologies = () => {
    this.setState(state => {
      return { list: this.props.skillsList, isExtended: false };
    });
  };

  renderMethodologyList = list => {
    return list.map((methodology, index) => {
      return (
        <Methodology
          key={index}
          content={methodology}
          isExtended={this.state.isExtended}
          choose={this.renderOneMethodology}
          close={this.renderAllMethodologies}
        />
      );
    });
  };

  render() {
    const { list } = this.state;

    return (
      <SkillsListStyle>
        {this.props.isLoading.READ_SKILLS_LIST && <UiLoading size={50} />}

        {!this.props.isLoading.READ_SKILLS_LIST && (
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

export default connect(
  mapStateToProps,
  { getSkillsList }
)(SkillsList);
