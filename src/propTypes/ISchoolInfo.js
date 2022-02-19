import PropTypes from 'prop-types';

export default PropTypes.shape({
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  mainLink: PropTypes.string.isRequired,
  countReviews: PropTypes.number.isRequired,
});
