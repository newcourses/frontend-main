import PropTypes from 'prop-types';
import { ICourseSubCategories } from './ICourseSubcategories';
import { IDatesChange } from './IMetaData';

const ICourseCategoryData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    subcategories: ICourseSubCategories,
    ...IDatesChange,
  }).isRequired,
});

const ICourseCategories = PropTypes.shape({
  data: PropTypes.arrayOf(ICourseCategoryData),
});

export { ICourseCategoryData, ICourseCategories };
