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
            <input type="search" ref="location" placeholder="Search weather by city"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});