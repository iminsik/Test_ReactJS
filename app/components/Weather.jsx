const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      location: 'Miami',
      temp: 88
    };
  },
  handleSearch: function(location) {
    var that = this;
    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({location: location, temp: temp})
    }, function(errorMessage) {
      console.error(errorMessage);
    });
  },
  render: function() {
    var {temp, location} = this.state;
    return (
      <div>
        <h1>Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});