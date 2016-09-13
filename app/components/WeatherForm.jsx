const React = require('react');

module.exports = React.createClass({
  handleSubmit: function(evt){
    evt.preventDefault();

    var location = this.refs.location.value;
    if(typeof location === 'string' && location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref="location"/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});