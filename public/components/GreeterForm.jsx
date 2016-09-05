var React = require('react');

var GreeterForm = React.createClass({
  updateData: function(propName, propMethod) {
    if(propName.value.length > 0) {
      propMethod(propName.value);
      propName.value = '';
    }
  }, 
  onFormSubmit: function(e) {
    e.preventDefault();

    this.updateData(this.refs.name, this.props.onNewName);
    this.updateData(this.refs.message, this.props.onNewMessage);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div><input type="text" ref="name" /></div>
        <div><textarea ref="message" cols="30" rows="5"></textarea></div>
        <div><button>Set Name</button></div>
      </form>
    );
  }
})

module.exports = GreeterForm;