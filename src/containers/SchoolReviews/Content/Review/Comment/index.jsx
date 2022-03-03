import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import css from './index.module.scss';
import Reactions from '../../../../../components/Reactions';
import { IReviewCommentAttributes } from '../../../../../propTypes';

function Comment({ isOpened, text, date, likes, dislikes, reviewer }) {
  return (
    <div className={css.container}>
      <Collapse isOpened={isOpened}>
        <div className={css.wrapper}>
          <div>{date}</div>
          <h3 className={css.name}>{reviewer.data.attributes.name}</h3>
          <p className={css.text}>{text}</p>
          <Reactions
            wrapperStyle={css.wrapperReactions}
            likes={likes}
            dislikes={dislikes}
          />
        </div>
      </Collapse>
    </div>
  );
}

Comment.propTypes = {
  ...IReviewCommentAttributes,
  isOpened: PropTypes.bool,
};
Comment.defaultProps = {
  text: 'Текст отсутствует...',
  isOpened: false,
  date: '',
};

export default React.memo(Comment);
