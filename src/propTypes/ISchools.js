import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';

const ISchoolAttributes = PropTypes.shape({
  name: PropTypes.string,
  grade: PropTypes.number,
  locale: PropTypes.string,
  mainLink: PropTypes.string,
  description: PropTypes.string,
  displayLink: PropTypes.string,
  countReviews: PropTypes.number,
  code: PropTypes.string.isRequired,
  ...IDatesChange,
});

const ISchoolData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: ISchoolAttributes.isRequired,
});

const ISchools = PropTypes.shape({
  data: PropTypes.arrayOf(ISchoolData),
});

export { ISchoolData, ISchools, ISchoolAttributes };
