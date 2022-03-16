import PropTypes from 'prop-types';
import { IDatesChange, IPagination } from './IMetaData';
import { ISchoolAttributes } from './index';

const ICourseAttributes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  durationUnit: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  creditPayment: PropTypes.number.isRequired,

  school: {
    data: ISchoolAttributes,
  },
  ...IDatesChange,
});

const ICourseData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: ICourseAttributes.isRequired,
});

const ICourses = PropTypes.shape({
  data: PropTypes.arrayOf(ICourseData),
  meta: {
    pagination: IPagination,
  },
});

export { ICourseData, ICourses, ICourseAttributes };
