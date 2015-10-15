import * as modules from './modules/index';
export default (store) => {
  const {Views: {Layout, Home}, Routes: {About}} = modules;
  return {
    component: 'div',
    childRoutes: [{
      path: '/',
      component: Layout,
      indexRoute: {component: Home},
      childRoutes: [
        About,
      ],
    }],
  };
};
