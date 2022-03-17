import React from 'react';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import cn from 'classnames';
import css from './index.module.scss';

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

export default React.memo(Reactions);
