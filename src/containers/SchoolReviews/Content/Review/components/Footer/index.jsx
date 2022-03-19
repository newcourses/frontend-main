import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import css from './index.module.scss';
import reply from '../../../../../../assets/images/nex.png';
import Reactions from '../../../../../../components/Reactions';
import { declOfNumComments } from '../../../../../../helpers';
import useDisplayErrorMessage from '../../../../../../hooks/useDisplayErrorMessage';
import useProxyApi from '../../../../../../hooks/useProxyApi';
import createReaction from '../../../../../../controllers/reqCreateReaction';

function Footer({
  reviewId,
  commentCount,
  isOpenComments,
  setIsOpenComments,
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
        reviewId,
        setDislikes,
      })(indicator),
    [dislikes, likes, request, reviewId],
  );

  return (
    <div className={css.wrapper}>
      <div>
        <button className={css.button} type="button">
          Прокомментировать
        </button>

        <button
          className={cn(css.button, css.comments)}
          type="button"
          onClick={() => setIsOpenComments(!isOpenComments)}
        >
          <img src={reply.src} alt="replies" className={css.commentsIcon} />
          {declOfNumComments(commentCount, true)}
        </button>
      </div>

      <Reactions likes={likes} dislikes={dislikes} handler={reactionHandler} />
    </div>
  );
}

export default React.memo(Footer);
