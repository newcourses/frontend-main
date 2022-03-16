import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';
import { ICourseData } from './ICourses';

const ICharacteristic = PropTypes.shape({
  text: PropTypes.string,
});

const ISchoolAttributes = {
  name: PropTypes.string,
  grade: PropTypes.number,
  locale: PropTypes.string,
  mainLink: PropTypes.string,
  description: PropTypes.string,
  displayLink: PropTypes.string,
  countReviews: PropTypes.number,
  code: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(ICourseData),
  advantages: PropTypes.arrayOf(ICharacteristic),
  disadvantages: PropTypes.arrayOf(ICharacteristic),
  ...IDatesChange,
};

const ISchoolData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: ISchoolAttributes,
});

const ISchools = PropTypes.shape({
  data: PropTypes.arrayOf(ISchoolData),
});

export { ISchoolData, ISchools, ISchoolAttributes };
