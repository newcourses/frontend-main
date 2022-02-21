import PropTypes from 'prop-types';
import { IDataImage } from './IDataImage';

export default PropTypes.shape({
  description: PropTypes.string,
  logo: IDataImage,
  value: PropTypes.string.isRequired,
  mainLink: PropTypes.string.isRequired,
  countReviews: PropTypes.number.isRequired,
});
