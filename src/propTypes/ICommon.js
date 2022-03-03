import PropTypes from 'prop-types';

const IBriefReaction = PropTypes.shape({
  like: PropTypes.number.isRequired,
  dislike: PropTypes.number.isRequired,
});

const moke = {};

export { IBriefReaction, moke };
