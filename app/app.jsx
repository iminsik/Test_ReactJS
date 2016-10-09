const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Countdown = require('Countdown');
const Timer = require('Timer');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);

  
