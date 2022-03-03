import React from 'react';
import PropTypes from 'prop-types';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import cn from 'classnames';
import css from './index.module.scss';
import { IBriefReaction } from '../../propTypes/ICommon';

function Reactions({ wrapperStyle, likes, dislikes }) {
  return (
    <div className={cn(css.wrapper, wrapperStyle)}>
      <div className={css.likeBlock}>
        <span className={cn(css.text, css.likeText)}>{likes}</span>
        <LikeOutlined className={cn(css.iconSize, css.likeHover)} />
      </div>
      <div>
        <span className={cn(css.text, css.dislikeText)}>{dislikes}</span>
        <DislikeOutlined className={cn(css.iconSize, css.dislikeHover)} />
      </div>
    </div>
  );
}

Reactions.propTypes = {
  wrapperStyle: PropTypes.string,
  ...IBriefReaction,
};
Reactions.defaultProps = {
  wrapperStyle: '',
};

export default React.memo(Reactions);
