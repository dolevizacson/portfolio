// load skills list content to skills page
export const loadSkillsList = () => async (dispatch, getState) => {
  //do async stuff with await
  dispatch({
    type: 'LOAD_SKILLS_LIST',
    payload: 'skils list',
  });
};
