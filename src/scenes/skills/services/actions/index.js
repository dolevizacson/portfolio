// load skills list content to skills page
export const loadSkillsListContent = () => async (dispatch, getState) => {
  console.log('load skill content');
  //do async stuff with await
  dispatch({
    type: 'LOAD_SKILLS_LIST_CONTENT',
    payload: 'skillList',
  });
};
