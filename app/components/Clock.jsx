var React = require('react');
var Clock = React.createClass({
  getDefaultProps: function() {
    return { totalSeconds: 0 };
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    return pad(minutes, 2) + ':' + pad(seconds, 2);
  },
  render: function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

function pad(value, length) {
    return (value.toString().length < length) ? pad("0"+value, length):value;
}
module.exports = Clock;