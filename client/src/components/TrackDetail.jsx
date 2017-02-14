var React = require('react');

var TrackDetail = function (props) {
  console.log(props)
  return (
    <div>
      <table>
        <tr>
          {props.value + 1} - {props.track.title.label}
       </tr>
      </table>
   </div>
  )


};

module.exports = TrackDetail;
