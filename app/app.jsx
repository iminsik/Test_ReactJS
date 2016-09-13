const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const AlaskaAirHomepage = require('AlaskaAirHomepage');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AlaskaAirHomepage}>
    </Route>
  </Router>,
  document.getElementById('app')
);

  
