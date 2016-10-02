const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const AlaskaAirHomepage = require('AlaskaAirHomepage');
const Weather = require('Weather');
const About = require('About');
const Example = require('Example');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AlaskaAirHomepage}>
      <Route path="about" component={About} />
      <Route path="example" component={Example} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);

  
