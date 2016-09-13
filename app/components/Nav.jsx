const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
        <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/Example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>

        <a href="#/about">Go To About</a>
      </div>
    );
  }
});

module.exports = Nav;