function getDefaultProps() {
  return { totalSeconds: 0 };
}

function pad(value, length) {
  return (value.toString().length < length) 
    ? pad("0"+value, length)
    : value;
}

function formatSeconds(totalSeconds) {
  var seconds = totalSeconds % 60;
  var minutes = Math.floor(totalSeconds / 60);

  return pad(minutes, 2) + ':' + pad(seconds, 2);
}

module.exports = 
{  
  getDefaultProps: getDefaultProps,
  pad: pad,
  formatSeconds: formatSeconds
}

