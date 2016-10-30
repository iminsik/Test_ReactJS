var React = require('react');
var Utils = require('Utils');

var Clock = React.createClass({
  getDefaultProps: Utils.getDefaultProps,
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: Utils.formatSeconds,
  render: function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {Utils.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});
module.exports = Clock;