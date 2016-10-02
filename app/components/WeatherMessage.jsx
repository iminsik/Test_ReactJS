const React = require('react');

module.exports = ({temp, location}) => 
(
  <div>
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  </div>
);