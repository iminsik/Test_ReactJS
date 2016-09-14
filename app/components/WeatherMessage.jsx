const React = require('react');

module.exports = (props) => {
    var {temp, location} = this.props;
    return (
      <div>
        <h3>It's it {temp} in {location}.</h3>
      </div>
    );
  };