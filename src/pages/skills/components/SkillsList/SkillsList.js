import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { actions, constants, types } from '../../../../env/utils/access';

// components
import Methodology from '../Methodology/Methodology';
import SkillsListView from './SkillsListView';

// actions
const { getSkillsLists, deleteSkillsList } = actions.skillsActions;

// constants
const { adminRoute, skillsRoute } = constants;

// types
const { skills: skillsTypes } = types;

class SkillsList extends Component {
  state = {
    localStateSkillsList: [],
    isExtended: false,
    updateSkill: false,
    skillsToUpdate: {},
  };

  componentDidMount = async () => {
    const { getSkillsLists } = this.props;
    await getSkillsLists();
    this.setState(state => ({
      localStateSkillsList: this.props.skillsList,
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
      this.state.localStateSkillsList !== this.props.skillsList &&
      this.state.isExtended === false
    ) {
      this.setState(state => ({
        localStateSkillsList: this.props.skillsList,
      }));
    }
  };

  renderOneMethodology = id => {
    const { localStateSkillsList } = this.state;
    this.setState(state => ({
      localStateSkillsList: localStateSkillsList.filter(
        methodology => methodology._id === id
      ),
      isExtended: true,
    }));
  };

  renderAllMethodologies = () => {
    const { skillsList } = this.props;
    this.setState(state => ({
      localStateSkillsList: skillsList,
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
    const {
      localStateSkillsList,
      isExtended,
      updateSkill,
      skillsToUpdate,
    } = this.state;
    const { location } = this.props;

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
      <SkillsListView
        state={{ skillsList: localStateSkillsList }}
        requestName={skillsTypes.readAll}
        isExtended={isExtended}
        choose={this.renderOneMethodology}
        close={this.renderAllMethodologies}
        deleteSkillsList={this.deleteSkillsList}
        updateSkillsList={this.updateSkillsList}
        closeOpenSkills={this.closeOpenSkills}
      />
    );
  }
}

const mapStateToProps = ({ skillsList }) => ({
  skillsList,
});

const mapDispatchToProps = dispatch => ({
  getSkillsLists: () => dispatch(getSkillsLists()),
  deleteSkillsList: id => dispatch(deleteSkillsList(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SkillsList)
);
