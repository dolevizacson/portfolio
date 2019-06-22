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
  },

  //routes
  homeRoute: '/',
  projectsRoute: '/projects',
  skillsRoute: '/skills',
  blogRoute: '/blog',
  contactRoute: '/contact',
  loginRoute: '/login',
  adminRoute: '/admin',

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
    footer: 'Post footer',
  },

  // skills list config
  skillslistLocalStorageKey: 'diAppskillsList',
  skillsListInitialState: {
    topic: 'skills list topic',
    image: 'skills list image path',
    stack: [
      {
        language: 'language name',
        longData: ['language skill'],
      },
    ],
  },
};

export default (process.env.NODE_ENV === 'production'
  ? merge(general, prod)
  : merge(general, dev));
