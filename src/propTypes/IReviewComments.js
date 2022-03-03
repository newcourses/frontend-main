import PropTypes from 'prop-types';
import { IDatesChange } from './IMetaData';
import { IBriefReaction } from './ICommon';
import IReviewer from './IReviewer';

const IReviewCommentAttributes = {
  text: PropTypes.string,
  reviewer: {
    data: IReviewer,
  },
  date: PropTypes.string,
  ...IBriefReaction,
  ...IDatesChange,
};

const IReviewCommentData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  attributes: PropTypes.shape(IReviewCommentAttributes),
});

const IReviewComments = PropTypes.shape({
  data: PropTypes.arrayOf(IReviewCommentData),
});

export { IReviewCommentData, IReviewComments, IReviewCommentAttributes };
