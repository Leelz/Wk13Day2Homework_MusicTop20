var React = require('react');
var ReactDOM = require('react-dom');

var TrackContainer = require('./containers/TrackContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <TrackContainer />,
    document.getElementById('app')
  );
};
