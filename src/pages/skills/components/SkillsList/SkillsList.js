import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {
  actions,
  UiHeader,
  UiLoading,
  constants,
} from '../../../../env/utils/access';

// components
import Methodology from '../Methodology/Methodology';

// styles
import {
  SkillsListStyle,
  SkillsListContainerStyle,
  HeaderIconStyle,
} from './SkillsListStyle';

// actions
const { getSkillsLists, deleteSkillsList } = actions.skillsActions;

// constants
const { adminRoute, skillsRoute } = constants;

class SkillsList extends Component {
  state = {
    list: [],
    isExtended: false,
    updateSkill: false,
    skillsToUpdate: {},
  };

  componentDidMount = async () => {
    const { getSkillsLists } = this.props;
    await getSkillsLists();
    this.setState(state => ({
      list: this.props.skillsList,
    }));
  };

  deleteSkillsList = id => {
    const { deleteSkillsList } = this.props;
    deleteSkillsList(id);
  };

  updateSkillsList = skillsList => {
    this.setState(state => ({ updateSkill: true, skillsToUpdate: skillsList }));
  };

  closeOpenSkills = () => {
    this.setState(state => ({ isExtended: false }));
  };

  componentDidUpdate = () => {
    if (
      this.state.list !== this.props.skillsList &&
      this.state.isExtended === false
    ) {
      this.setState(state => ({
        list: this.props.skillsList,
      }));
    }
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
          deleteSkillsList={this.deleteSkillsList}
          updateSkillsList={this.updateSkillsList}
          closeOpenSkills={this.closeOpenSkills}
        />
      );
    });
  };

  render() {
    const { list, updateSkill, skillsToUpdate } = this.state;
    const { isLoading, location } = this.props;

    if (updateSkill)
      return (
        <Redirect
          to={{
            pathname: `${adminRoute}${skillsRoute}`,
            state: {
              from: location.pathname,
              skillsList: skillsToUpdate,
            },
          }}
        />
      );

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
  getSkillsLists: () => dispatch(getSkillsLists()),
  deleteSkillsList: id => dispatch(deleteSkillsList(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SkillsList)
);
