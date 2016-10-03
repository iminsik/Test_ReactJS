const React = require('react');
const {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
              </li>
              <li>
                <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/Example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li><input type="search" placeholder="Search Weather by City"/></li>
                <li><input type="submit" className="button" value="Get Weather"/></li>
              </ul>
            </form>
          </div>
      </div>
    );
  }
})

module.exports = Nav;

var old = (
  <div>
    <h2>Nav Component</h2>

    <a href="#/about">Go To About</a>
  </div>
);