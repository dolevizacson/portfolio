// load skills list content to skills page
export const loadSkillsListContent = skillList => async (
  dispatch,
  getState
) => {
  //do async stuff with await
  dispatch({
    type: 'LOAD_SKILLS_LIST_CONTENT',
    payload: skillList,
  });
};
