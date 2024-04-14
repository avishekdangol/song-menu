import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types'

function Player({ source }) {
  return (
    <AudioPlayer
      autoPlay
      src={source}
    />
  );
}

Player.propTypes = {
  source: PropTypes.string.isRequired
}

export default Player