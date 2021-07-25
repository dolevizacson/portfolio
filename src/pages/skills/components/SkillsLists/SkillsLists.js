import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions, constants, types } from '../../../../env/utils/access';

// components
import SkillsListsView from './SkillsListsView';

// actions
const {
  getSkillsLists,
  getActiveSkillsLists,
  deleteSkillsList,
  toggleSkillsList,
} = actions.skillsActions;

// constants
const { adminRoute, skillsRoute, updateRoute } = constants;

// types
const { skills: skillsTypes } = types;

class SkillsLists extends Component {
  state = {
    chosenSkillsList: null,
  };

  componentDidMount = async () => {
    await this.getSkillsLists();
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.init !== prevProps.init ||
      this.props.isLoggedIn !== prevProps.isLoggedIn
    ) {
      this.getSkillsLists();
    }
  };

  getSkillsLists = async () => {
    const { init, location, isLoggedIn, getActiveSkillsLists, getSkillsLists } =
      this.props;
    if (init) {
      isLoggedIn ? await getSkillsLists() : await getActiveSkillsLists();
    }
    if (location && location.state) {
      const { _id } = location.state;
      this.renderOneSkillsList(_id);
    }
  };

  deleteSkillsList = (id) => {
    const { deleteSkillsList } = this.props;
    deleteSkillsList(id);
    this.renderAllSkillsLists();
  };

  updateSkillsList = (skillsList) => {
    const { history } = this.props;
    history.push(`${adminRoute}${skillsRoute}${updateRoute}/${skillsList._id}`);
  };

  toggleSkillsList = async (id) => {
    const { toggleSkillsList } = this.props;
    await toggleSkillsList(id);
    this.renderOneSkillsList(id);
  };

  renderOneSkillsList = (id) => {
    const { skillsLists } = this.props;
    let chosenSkillsList;

    skillsLists.forEach((skillsList) => {
      if (skillsList._id === id) {
        chosenSkillsList = skillsList;
      }
    });

    this.setState((state) => ({
      chosenSkillsList,
    }));
  };

  renderAllSkillsLists = () => {
    this.setState((state) => ({
      chosenSkillsList: null,
    }));
  };

  render() {
    const { chosenSkillsList } = this.state;

    const { skillsLists, isLoggedIn } = this.props;

    return (
      <>
        <SkillsListsView
          state={{ skillsLists, chosenSkillsList }}
          requestName={
            isLoggedIn ? skillsTypes.readAll : skillsTypes.readAllActive
          }
          functions={{
            getSkillsLists: this.getSkillsLists,
            renderOneSkillsList: this.renderOneSkillsList,
            renderAllSkillsLists: this.renderAllSkillsLists,
            deleteSkillsList: this.deleteSkillsList,
            updateSkillsList: this.updateSkillsList,
            toggleSkillsList: this.toggleSkillsList,
          }}
        />
      </>
    );
  }
}

const mapStateToProps = ({ skillsLists, init, isLoggedIn }) => ({
  skillsLists,
  init,
  isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  getSkillsLists: () => dispatch(getSkillsLists()),
  getActiveSkillsLists: () => dispatch(getActiveSkillsLists()),
  deleteSkillsList: (id) => dispatch(deleteSkillsList(id)),
  toggleSkillsList: (id) => dispatch(toggleSkillsList(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SkillsLists)
);
