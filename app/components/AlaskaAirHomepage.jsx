const React = require('react');
const ReactDOM = require('react-dom');
const NameCityForm = require('./NameCityForm');

const AlaskaAirHomepage = React.createClass({
    updateNameCity: function(name, city) {
        this.setState({name});
        this.setState({city});
    },
    getDefaultProps: function () {
        return {
            name: 'Insik',
            city: 'Seattle'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            city: this.props.city
        };
    },
    render: function() {
        return (
            <div>
                <h1 className='jumbotron text-center'>Hello, {this.state.name} @ {this.state.city}!</h1>
                <NameCityForm updateNameCity={this.updateNameCity} />
            </div>
        );
    }
});

module.exports = AlaskaAirHomepage;