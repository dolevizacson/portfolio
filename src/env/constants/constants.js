import { merge } from 'lodash';

const dev = {
  server: {
    baseUrl: 'http://localhost:5000',
  },
};

const prod = {
  server: {
    baseUrl: process.env.BASE_URL,
  },
};

const general = {
  server: {
    // endpoints
    skills: '/skills',
    auth: '/auth',
    blog: '/blog',
    taskList: '/tasklist',
  },

  //routes
  homeRoute: '/',
  projectsRoute: '/projects',
  skillsRoute: '/skills',
  blogRoute: '/blog',
  contactRoute: '/contact',
  loginRoute: '/login',
  adminRoute: '/admin',
  taskListRoute: '/tasklist',

  // blog post config
  blogFormLocalStorageKey: 'diAppblogPost',

  blogPostInitialState: {
    header: 'Post Header',
    summery: 'Post summery',
    paragraph: [
      {
        header: 'Paragraph header',
        content: 'Paragraph content',
      },
    ],
    conclusion: {
      header: 'Post conclusion header',
      content: 'Post conclusion content',
    },
    conclusionSentence: 'Post conclusion sentence',
  },

  // skills list config
  skillslistLocalStorageKey: 'diAppskillsList',
  skillsListInitialState: {
    topic: 'Skills list topic',
    stack: [
      {
        language: 'Language name',
        longData: ['Language skill'],
      },
    ],
  },

  // task config
  taskLocalStorageKey: 'diApptask',
  taskInitialState: {
    header: 'Task header',
    description: 'Task description',
  },
};

export default process.env.NODE_ENV === 'production'
  ? merge(general, prod)
  : merge(general, dev);
