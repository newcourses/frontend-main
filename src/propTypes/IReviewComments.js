import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';
import { IBriefReaction } from './ICommon';
import IReviewer from './IReviewer';

const IReviewCommentData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.objectOf({
    text: PropTypes.string.isRequired,
    reviewer: {
      data: IReviewer,
    },
    date: PropTypes.string.isRequired,
    ...IBriefReaction,
    ...IDatesChange,
  }).isRequired,
});

const IReviewComments = PropTypes.shape({
  data: PropTypes.arrayOf(IReviewCommentData),
});

export { IReviewCommentData, IReviewComments };
