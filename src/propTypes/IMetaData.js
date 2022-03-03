import PropTypes from 'prop-types';

const IPagination = PropTypes.shape({
  page: PropTypes.number,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
});

const IDatesChange = PropTypes.shape({
  createdAt: PropTypes.instanceOf(Date).isRequired,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
  publishedAt: PropTypes.instanceOf(Date),
});

export { IPagination, IDatesChange };
