import PropTypes from 'prop-types';
import ICourseSubcategories from './ICourseSubcategories';

const ICourseCategoriesData = PropTypes.arrayOf({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.objectOf({
    caption: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    updatedAt: PropTypes.instanceOf(Date).isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    locale: PropTypes.string.isRequired,
    subcategories: ICourseSubcategories.isRequired,
  }).isRequired,
});

const ICourseCategories = PropTypes.shape({
  data: PropTypes.arrayOf(ICourseCategoriesData.isRequired),
});

export { ICourseCategoriesData, ICourseCategories };
