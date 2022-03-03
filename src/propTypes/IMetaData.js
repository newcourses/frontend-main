import PropTypes from 'prop-types';

const IPagination = PropTypes.shape({
  page: PropTypes.number,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
});

const IDatesChange = {
  createdAt: PropTypes.instanceOf(Date).isRequired,
  updatedAt: PropTypes.instanceOf(Date).isRequired,
  publishedAt: PropTypes.instanceOf(Date),
};

export { IPagination, IDatesChange };
