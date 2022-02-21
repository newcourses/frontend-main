import PropTypes from 'prop-types';

export default PropTypes.shape({
  blurDataURL: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
});
