import PropTypes from 'prop-types';

const IPagination = PropTypes.shape({
  page: PropTypes.number,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
});

const IDatesChange = {
  createdAt: PropTypes.instanceOf(PropTypes.string).isRequired,
  updatedAt: PropTypes.instanceOf(PropTypes.string).isRequired,
  publishedAt: PropTypes.instanceOf(PropTypes.string),
};

export { IPagination, IDatesChange };
