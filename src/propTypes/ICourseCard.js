import PropTypes from 'prop-types';
import ISchoolInfo from './ISchoolInfo';

export default PropTypes.shape({
  schoolInfo: ISchoolInfo.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  peculiarities: PropTypes.string.isRequired,
});
