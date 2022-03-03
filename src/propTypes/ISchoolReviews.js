import PropTypes from 'prop-types';
import { IDatesChange, IPagination } from './IMetaData';
import IReviewer from './IReviewer';
import ISchoolInfo from './ISchoolInfo';
import { IBriefReaction } from './ICommon';
import { IReviewComments } from './IReviewComments';

const ISchoolReviewData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    reviewer: {
      data: IReviewer,
    },
    school: {
      data: ISchoolInfo,
    },
    comments: IReviewComments,
    ...IBriefReaction,
    ...IDatesChange,
  }).isRequired,
});

const ISchoolReviews = PropTypes.shape({
  data: PropTypes.arrayOf(ISchoolReviewData),
  meta: {
    pagination: IPagination,
  },
});

export { ISchoolReviewData, ISchoolReviews };
