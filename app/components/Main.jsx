const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => 
(
    <div>
        <div>
            <div>
                <Navigation />
                <p>Main.jsx rendered.</p>
                {props.children}
            </div>
        </div>
    </div>
);

module.exports = Main;