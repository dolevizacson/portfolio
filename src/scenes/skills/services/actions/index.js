// load skills list content to skills page
export const loadSkillsListContent = () => async (dispatch, getState) => {
  console.log('load skill content');
  //do async stuff with await
  dispatch({
    type: 'LOAD_SKILLS_LIST_CONTENT',
    payload: 'skillList',
  });
};

export const loadOneSkillsList = skillsList => async (dispatch, getState) => {
  console.log('load one skill');
  //do async stuff with await
  dispatch({
    type: 'LOAD_ONE_SKILLS_LIST',
    payload: skillsList,
  });
};
