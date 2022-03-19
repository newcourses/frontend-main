import React, { useCallback, useState } from 'react';
import { Collapse } from 'react-collapse';
import css from './index.module.scss';
import Reactions from '../../../../../../components/Reactions';
import useProxyApi from '../../../../../../hooks/useProxyApi';
import useDisplayErrorMessage from '../../../../../../hooks/useDisplayErrorMessage';
import createReaction from '../../../../../../controllers/reqCreateReaction';

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
