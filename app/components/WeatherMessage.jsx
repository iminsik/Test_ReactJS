const React = require('react');

module.exports = ({temp, location}) => 
(
  <div>
    <h3>It's it {temp} in {location}.</h3>
  </div>
);