import React from 'react';
import cn from 'classnames';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function Reactions({ wrapperStyle, likes, dislikes, handler }) {
  return (
    <div className={cn(css.wrapper, wrapperStyle)}>
      <div className={css.likeBlock}>
        <span className={cn(css.text, css.likeText)}>{likes}</span>
        <LikeOutlined
          className={cn(css.iconSize, css.likeHover)}
          onClick={() => handler(true)}
        />
      </div>
      <div>
        <span className={cn(css.text, css.dislikeText)}>{dislikes}</span>
        <DislikeOutlined
          className={cn(css.iconSize, css.dislikeHover)}
          onClick={() => handler(false)}
        />
      </div>
    </div>
  );
}

export default React.memo(Reactions);
