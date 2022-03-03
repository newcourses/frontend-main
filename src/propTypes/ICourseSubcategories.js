import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';

const ICourseSubCategoryData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    ...IDatesChange,
  }).isRequired,
});

const ICourseSubCategories = PropTypes.shape({
  data: PropTypes.arrayOf(ICourseSubCategoryData),
});

export { ICourseSubCategoryData, ICourseSubCategories };
