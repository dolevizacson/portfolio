const general = {
  server: {
    // endpoints
    skills: '/skills',
    auth: '/auth',
    blog: '/blog',
    taskList: '/tasklist',
    projects: '/projects',
    contact: '/contact',
  },

  //routes
  homeRoute: '/',
  projectsRoute: '/projects',
  skillsRoute: '/skills',
  tasksRoute: '/tasks',
  blogRoute: '/blog',
  contactRoute: '/contact',
  loginRoute: '/login',
  adminRoute: '/admin',
  updateRoute: '/update',

  // project config
  projectFormLocalStorageKey: 'diAppProject',

  projectInitialState: {
    header: '',
    summery: '',
    description: '',
    technologies: [''],
    links: [],
  },

  // skills list config
  skillsListFormLocalStorageKey: 'diAppSkillsList',

  skillsListInitialState: {
    topic: '',
    stack: [
      {
        language: '',
        longData: [''],
      },
    ],
  },

  // task config
  taskFormLocalStorageKey: 'diAppTask',

  taskInitialState: {
    header: '',
    description: '',
  },

  // blog post config
  blogFormLocalStorageKey: 'diAppBlogPost',

  blogPostInitialState: {
    header: '',
    summery: '',
    paragraph: [
      {
        header: '',
        content: '',
      },
    ],
    conclusion: {
      header: '',
      content: '',
    },
    conclusionSentence: '',
  },

  // contact config
  contactInitialState: {
    name: '',
    from: '',
    subject: '',
    text: '',
  },
};

export default general;
