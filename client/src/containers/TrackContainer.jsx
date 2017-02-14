var React = require('react');
var TrackList = require('../components/TrackList');

var TrackContainer = React.createClass({

  getInitialState: function () {
    return { 
      tracks: []
    };
  },
  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        var newData = data.feed.entry;
        this.setState({tracks : newData});
      }
    }.bind(this);
    request.send(null);
  },
  render: function () {
    return (
      <div>
        <h2>UK Top 20</h2>
        <TrackList tracks = {this.state.tracks} />
      </div>
    )
  }
});

module.exports = TrackContainer;
