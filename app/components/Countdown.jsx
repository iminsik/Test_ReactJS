const React = require('react');
const Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129} />
      </div>
    );
  }
});

module.exports = Countdown;