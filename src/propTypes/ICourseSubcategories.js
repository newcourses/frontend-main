import PropTypes from 'prop-types';

export default PropTypes.shape({
  data: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      caption: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      updatedAt: PropTypes.instanceOf(Date).isRequired,
      publishedAt: PropTypes.instanceOf(Date).isRequired,
      locale: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
});
