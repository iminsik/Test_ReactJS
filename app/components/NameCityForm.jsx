const React = require('react');
const ReactDOM = require('react-dom');

const NameCityForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var name = this.refs.name.value;
        var city = this.refs.city.value;
        if(typeof name === 'string' && name.length > 0
            && typeof name === 'string' && name.length > 0) {
            this.props.updateNameCity(name, city);
            this.refs.name.value = '';
            this.refs.city.value = '';
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><label>Name <input type="text" ref="name" /></label></div>
                    <div><label>City <input type="text" ref="city" /></label></div>
                    <div><button onClick={this.handleSubmit}>Change Name</button></div>
                </form>
            </div>
        );
    }
});

module.exports = NameCityForm;