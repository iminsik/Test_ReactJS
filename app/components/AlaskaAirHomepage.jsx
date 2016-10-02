const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('Nav')
const NameCityForm = require('./NameCityForm');

const AlaskaAirHomepage = (props) => 
(
    <div>
        <Nav />
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                {props.children}
            </div>
        </div>
    </div>
);

module.exports = AlaskaAirHomepage;