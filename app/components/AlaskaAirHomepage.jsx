const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('Nav')
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
                <Nav />
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = AlaskaAirHomepage;