var React = require('react');

var TrackDetail = require('./TrackDetail.jsx');

var TrackList = React.createClass({
  
  render: function () {

    console.log(this.props)

    var tracks = this.props.tracks.map( function(track, index) {
      
      return <TrackDetail value={index} key={index} track={track}/>
    })

    return (
      <div>
          {tracks}
      </div>
      )
  }
});

module.exports = TrackList;
