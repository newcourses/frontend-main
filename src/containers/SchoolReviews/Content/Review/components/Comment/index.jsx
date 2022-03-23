import { Collapse } from 'react-collapse';
import React, { useCallback } from 'react';
import useProxyApi from 'hooks/useProxyApi';
import Reactions from 'components/Reactions';
import { REACTIONS } from 'library/routers';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import css from './index.module.scss';

function Comment({
  text,
  date,
  reviewer,
  isOpened,
  commentId,
  likes: initLikes,
  dislikes: initDislikes,
}) {
  const { request, error, clearError } = useProxyApi();

  useDisplayErrorMessage(error, clearError);

  const reactionHandler = useCallback(
    async (indicator) => {
      await request(REACTIONS, 'POST', null, {
        indicator,
        comment: commentId,
      });
    },
    [commentId, request],
  );

  return (
    <div className={css.container}>
      <Collapse isOpened={isOpened}>
        <div className={css.wrapper}>
          <div>{date}</div>
          <h3 className={css.name}>{reviewer?.data?.attributes?.name}</h3>
          <p className={css.text}>{text}</p>
        </div>
        <Reactions
          wrapperStyle={css.wrapperReactions}
          initLikes={initLikes}
          handler={reactionHandler}
          initDislikes={initDislikes}
        />
      </Collapse>
    </div>
  );
}

export default React.memo(Comment);
