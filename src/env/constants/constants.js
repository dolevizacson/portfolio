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
  adminRoute: '/admin',
  loginRoute: '/login',
};
console.log({ ...general, ...dev });

export default (process.env.NODE_ENV === 'production'
  ? merge(general, prod)
  : merge(general, dev));
