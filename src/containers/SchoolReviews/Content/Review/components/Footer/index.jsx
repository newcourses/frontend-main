import cn from 'classnames';
import reply from 'assets/images/nex.png';
import React, { useCallback } from 'react';
import { REACTIONS } from 'library/routers';
import { declOfNumComments } from 'helpers';
import useProxyApi from 'hooks/useProxyApi';
import Reactions from 'components/Reactions';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import css from './index.module.scss';

function Footer({
  reviewId,
  commentCount,
  isOpenComments,
  likes: initLikes,
  setIsOpenComments,
  isOpenedLeaveComment,
  dislikes: initDislikes,
  setIsOpenedLeaveComment,
}) {
  const { request, error, clearError } = useProxyApi();

  useDisplayErrorMessage(error, clearError);

  const reactionHandler = useCallback(
    async (indicator) => {
      await request(REACTIONS, 'POST', null, {
        indicator,
        review: reviewId,
      });
    },
    [request, reviewId],
  );

  return (
    <div className={css.wrapper}>
      <div>
        <button
          type="button"
          className={css.button}
          onClick={() => setIsOpenedLeaveComment(!isOpenedLeaveComment)}
        >
          Прокомментировать
        </button>

        <button
          type="button"
          className={cn(css.button, css.comments)}
          onClick={() => setIsOpenComments(!isOpenComments)}
        >
          <img src={reply.src} alt="replies" className={css.commentsIcon} />
          {declOfNumComments(commentCount, true)}
        </button>
      </div>

      <Reactions
        initLikes={initLikes}
        handler={reactionHandler}
        initDislikes={initDislikes}
      />
    </div>
  );
}

export default React.memo(Footer);
