var React = require('react');
var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    return pad(minutes, 2) + ':' + pad(seconds, 2);
  },
  render: function() {
    return (
      <div>Clock components</div>
    );
  }
});

function pad(value, length) {
    return (value.toString().length < length) ? pad("0"+value, length):value;
}
module.exports = Clock;