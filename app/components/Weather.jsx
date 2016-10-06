const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

const ErrorModal = require('ErrorModal');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({isLoading: false, location: location, temp: temp})
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: 'Not Found City, ' + location
      });
    });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMessage() }
        { renderError() }
      </div>
    );
  }
});