/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/App/pages/HomePage/HomePage');
  require('./modules/PowerBank/pages/LendPage/LendPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/pages/HomePage/HomePage').default);
        });
      }}
    />
    <Route
      path="/lend-battery"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/PowerBank/pages/LendPage/LendPage').default);
        });
      }}
    />
  </Route>
);
