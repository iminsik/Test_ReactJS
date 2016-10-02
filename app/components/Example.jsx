const React = require('react');
var {Link} = require('react-router');

module.exports = (props) => 
  (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=Seoul'>Seoul, KR</Link></li>
        <li><Link to='/?location=Seattle'>Seattle, WA</Link></li>
      </ol>  
    </div>
  );