import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';

export default PropTypes.shape({
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ...IDatesChange,
  }),
  id: PropTypes.number.isRequired,
});
