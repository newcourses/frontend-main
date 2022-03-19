import { Collapse } from 'react-collapse';
import useProxyApi from 'hooks/useProxyApi';
import Reactions from 'components/Reactions';
import React, { useCallback, useState } from 'react';
import createReaction from 'controllers/reqCreateReaction';
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
  const [likes, setLikes] = useState(initLikes);
  const [dislikes, setDislikes] = useState(initDislikes);

  const { request, error, clearError } = useProxyApi();

  useDisplayErrorMessage(error, clearError);

  const reactionHandler = useCallback(
    (indicator) =>
      createReaction({
        likes,
        request,
        setLikes,
        dislikes,
        commentId,
        setDislikes,
      })(indicator),
    [commentId, dislikes, likes, request],
  );

  return (
    <div className={css.container}>
      <Collapse isOpened={isOpened}>
        <div className={css.wrapper}>
          <div>{date}</div>
          <h3 className={css.name}>{reviewer.data.attributes.name}</h3>
          <p className={css.text}>{text}</p>
          <Reactions
            handler={reactionHandler}
            wrapperStyle={css.wrapperReactions}
            likes={likes}
            dislikes={dislikes}
          />
        </div>
      </Collapse>
    </div>
  );
}

export default React.memo(Comment);
