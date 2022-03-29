import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { message } from 'antd';
import css from './index.module.scss';

function Reactions({
  handler,
  initLikes,
  posItemProp,
  negItemProp,
  initDislikes,
  wrapperStyle,
}) {
  const [likes, setLikes] = useState(initLikes);
  const [dislikes, setDislikes] = useState(initDislikes);

  const handlerReaction = useCallback(
    async (indicator) => {
      await handler(indicator);
      message.success('Ваша реакция учтена!');

      if (indicator) {
        setLikes(likes + 1);
      } else {
        setDislikes(dislikes + 1);
      }
    },
    [dislikes, handler, likes],
  );

  return (
    <div className={cn(css.wrapper, wrapperStyle)}>
      <div className={css.likeBlock}>
        <span className={cn(css.text, css.likeText)} itemProp={posItemProp}>
          {likes}
        </span>
        <LikeOutlined
          className={cn(css.iconSize, css.likeHover)}
          onClick={() => handlerReaction(true)}
        />
      </div>
      <div>
        <span className={cn(css.text, css.dislikeText)} itemProp={negItemProp}>
          {dislikes}
        </span>
        <DislikeOutlined
          className={cn(css.iconSize, css.dislikeHover)}
          onClick={() => handlerReaction(false)}
        />
      </div>
    </div>
  );
}

export default React.memo(Reactions);
