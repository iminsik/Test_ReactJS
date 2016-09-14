const React = require('react');
const ReactDOM = require('react-dom');
const Nav = require('Nav')
const NameCityForm = require('./NameCityForm');

const AlaskaAirHomepage = (props) => 
(
    <div>
        <Nav />
        <h2>Main Component</h2>
        {props.children}
    </div>
);

module.exports = AlaskaAirHomepage;