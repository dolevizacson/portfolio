const types = {
  init: {
    isLoggedIn: 'IS_LOGGED_IN_INIT',
  },

  skills: {
    readAll: 'READ_SKILLS_LISTS',
    readAllRequest: 'READ_SKILLS_LISTS_REQUEST',
    readAllSuccess: 'READ_SKILLS_LISTS_SUCCESS',
    readAllFail: 'READ_SKILLS_LISTS_FAILURE',

    readAllActive: 'READ_ACTIVE_SKILLS_LISTS',
    readAllActiveRequest: 'READ_ACTIVE_SKILLS_LISTS_REQUEST',
    readAllActiveSuccess: 'READ_ACTIVE_SKILLS_LISTS_SUCCESS',
    readAllActiveFail: 'READ_ACTIVE_SKILLS_LISTS_FAILURE',

    read: 'READ_SKILLS_LIST',
    readRequest: 'READ_SKILLS_LIST_REQUEST',
    readSuccess: 'READ_SKILLS_LIST_SUCCESS',
    readFail: 'READ_SKILLS_LIST_FAILURE',

    create: 'CREATE_SKILLS_LIST',
    createRequest: 'CREATE_SKILLS_LIST_REQUEST',
    createSuccess: 'CREATE_SKILLS_LIST_SUCCESS',
    createFail: 'CREATE_SKILLS_LIST_FAILURE',

    update: 'UPDATE_SKILLS_LIST',
    updateRequest: 'UPDATE_SKILLS_LIST_REQUEST',
    updateSuccess: 'UPDATE_SKILLS_LIST_SUCCESS',
    updateFail: 'UPDATE_SKILLS_LIST_FAILURE',

    deleteRequest: 'DELETE_SKILLS_LIST_REQUEST',
    deleteSuccess: 'DELETE_SKILLS_LIST_SUCCESS',
    deleteFail: 'DELETE_SKILLS_LIST_FAILURE',

    toggleRequest: 'TOGGLE_SKILLS_LIST_REQUEST',
    toggleSuccess: 'TOGGLE_SKILLS_LIST_SUCCESS',
    toggleFail: 'TOGGLE_SKILLS_LIST_FAILURE',
  },

  blog: {
    readAllActive: 'READ_ACTIVE_BLOG_POSTS',
    readAllActiveRequest: 'READ_ACTIVE_BLOG_POSTS_REQUEST',
    readAllActiveSuccess: 'READ_ACTIVE_BLOG_POSTS_SUCCESS',
    readAllActiveFail: 'READ_ACTIVE_BLOG_POSTS_FAILURE',

    readAll: 'READ_BLOG_POSTS',
    readAllRequest: 'READ_BLOG_POSTS_REQUEST',
    readAllSuccess: 'READ_BLOG_POSTS_SUCCESS',
    readAllFail: 'READ_BLOG_POSTS_FAILURE',

    read: 'READ_BLOG_POST',
    readRequest: 'READ_BLOG_POST_REQUEST',
    readSuccess: 'READ_BLOG_POST_SUCCESS',
    readFail: 'READ_BLOG_POST_FAILURE',

    readActive: 'READ_ACTIVE_BLOG_POST',
    readActiveRequest: 'READ_ACTIVE_BLOG_POST_REQUEST',
    readActiveSuccess: 'READ_ACTIVE_BLOG_POST_SUCCESS',
    readActiveFail: 'READ_ACTIVE_BLOG_POST_FAILURE',

    create: 'CREATE_BLOG_POST',
    createRequest: 'CREATE_BLOG_POST_REQUEST',
    createSuccess: 'CREATE_BLOG_POST_SUCCESS',
    createFail: 'CREATE_BLOG_POST_FAILURE',

    update: 'UPDATE_BLOG_POST',
    updateRequest: 'UPDATE_BLOG_POST_REQUEST',
    updateSuccess: 'UPDATE_BLOG_POST_SUCCESS',
    updateFail: 'UPDATE_BLOG_POST_FAILURE',

    toggleRequest: 'TOGGLE_BLOG_POST_REQUEST',
    toggleSuccess: 'TOGGLE_BLOG_POST_SUCCESS',
    toggleFail: 'TOGGLE_BLOG_POST_FAILURE',

    deleteRequest: 'DELETE_BLOG_POST_REQUEST',
    deleteSuccess: 'DELETE_BLOG_POST_SUCCESS',
    deleteFail: 'DELETE_BLOG_POST_FAILURE',

    change: 'CHANGE_BLOG_POST',
    reset: 'RESET_BLOG_POST',
  },
  taskList: {
    readAll: 'READ_TASK_LIST',
    readAllRequest: 'READ_TASK_LIST_REQUEST',
    readAllSuccess: 'READ_TASK_LIST_SUCCESS',
    readAllFail: 'READ_TASK_LIST_FAILURE',

    readAllActive: 'READ_ACTIVE_TASK_LIST',
    readAllActiveRequest: 'READ_ACTIVE_TASK_LIST_REQUEST',
    readAllActiveSuccess: 'READ_ACTIVE_TASK_LIST_SUCCESS',
    readAllActiveFail: 'READ_ACTIVE_TASK_LIST_FAILURE',

    read: 'READ_TASK',
    readRequest: 'READ_TASK_REQUEST',
    readSuccess: 'READ_TASK_SUCCESS',
    readFail: 'READ_TASK_FAILURE',

    create: 'CREATE_TASK',
    createRequest: 'CREATE_TASK_REQUEST',
    createSuccess: 'CREATE_TASK_SUCCESS',
    createFail: 'CREATE_TASK_FAILURE',

    update: 'UPDATE_TASK',
    updateRequest: 'UPDATE_TASK_REQUEST',
    updateSuccess: 'UPDATE_TASK_SUCCESS',
    updateFail: 'UPDATE_TASK_FAILURE',

    toggleRequest: 'TOGGLE_TASK_REQUEST',
    toggleSuccess: 'TOGGLE_TASK_SUCCESS',
    toggleFail: 'TOGGLE_TASK_FAILURE',

    deleteRequest: 'DELETE_TASK_REQUEST',
    deleteSuccess: 'DELETE_TASK_SUCCESS',
    deleteFail: 'DELETE_TASK_FAILURE',
  },
  auth: {
    login: 'LOGIN',
    loginRequest: 'LOGIN_REQUEST',
    loginSuccess: 'LOGIN_SUCCESS',
    loginFail: 'LOGIN_FAILURE',

    logout: 'LOGOUT',
    logoutRequest: 'LOGOUT_REQUEST',
    logoutSuccess: 'LOGOUT_SUCCESS',
    logoutFail: 'LOGOUT_FAILURE',

    isLoggedInRequest: 'IS_LOGGED_IN_REQUEST',
    isLoggedInSuccess: 'IS_LOGGED_IN_SUCCESS',
    isLoggedInFail: 'IS_LOGGED_IN_FAILURE',
  },
  projects: {
    readAllActive: 'READ_ACTIVE_PROJECTS',
    readAllActiveRequest: 'READ_ACTIVE_PROJECTS_REQUEST',
    readAllActiveSuccess: 'READ_ACTIVE_PROJECTS_SUCCESS',
    readAllActiveFail: 'READ_ACTIVE_PROJECTS_FAILURE',

    readAll: 'READ_PROJECTS',
    readAllRequest: 'READ_PROJECTS_REQUEST',
    readAllSuccess: 'READ_PROJECTS_SUCCESS',
    readAllFail: 'READ_PROJECTS_FAILURE',

    read: 'READ_PROJECT',
    readRequest: 'READ_PROJECT_REQUEST',
    readSuccess: 'READ_PROJECT_SUCCESS',
    readFail: 'READ_PROJECT_FAILURE',

    readActive: 'READ_ACTIVE_PROJECT',
    readActiveRequest: 'READ_ACTIVE_PROJECT_REQUEST',
    readActiveSuccess: 'READ_ACTIVE_PROJECT_SUCCESS',
    readActiveFail: 'READ_ACTIVE_PROJECT_FAILURE',

    create: 'CREATE_PROJECT',
    createRequest: 'CREATE_PROJECT_REQUEST',
    createSuccess: 'CREATE_PROJECT_SUCCESS',
    createFail: 'CREATE_PROJECT_FAILURE',

    update: 'UPDATE_PROJECT',
    updateRequest: 'UPDATE_PROJECT_REQUEST',
    updateSuccess: 'UPDATE_PROJECT_SUCCESS',
    updateFail: 'UPDATE_PROJECT_FAILURE',

    toggleRequest: 'TOGGLE_PROJECT_REQUEST',
    toggleSuccess: 'TOGGLE_PROJECT_SUCCESS',
    toggleFail: 'TOGGLE_PROJECT_FAILURE',

    deleteRequest: 'DELETE_PROJECT_REQUEST',
    deleteSuccess: 'DELETE_PROJECT_SUCCESS',
    deleteFail: 'DELETE_PROJECT_FAILURE',
  },
  contact: {
    create: 'CREATE_MAIL',
    createRequest: 'CREATE_MAIL_REQUEST',
    createSuccess: 'CREATE_MAIL_SUCCESS',
    createFail: 'CREATE_MAIL_FAILURE',

    resetMessageSent: 'RESET_MESSAGE_SENT',
  },
  errors: {
    resetErrors: 'RESET_ERRORS',
  },
};

export default types;
