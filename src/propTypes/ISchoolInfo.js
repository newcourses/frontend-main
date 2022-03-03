import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';

export default PropTypes.shape({
  attributes: PropTypes.shape({
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    displayLink: PropTypes.string.isRequired,
    mainLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ...IDatesChange,

    // TODO
    // rating: PropTypes.number.isRequired,
    // countReviews: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
});
