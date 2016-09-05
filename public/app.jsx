var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!!'}</p>
      </div>
    );
  }
})

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

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is a message'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewName: function(name) {
      this.setState({name: name});
  },
  handleNewMessage: function(message) {
      this.setState({message: message});
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    )
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);

