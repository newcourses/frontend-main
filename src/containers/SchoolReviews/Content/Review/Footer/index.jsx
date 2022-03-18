import React, { useCallback } from 'react';
import cn from 'classnames';
import css from './index.module.scss';
import reply from '../../../../../assets/images/nex.png';
import Reactions from '../../../../../components/Reactions';
import { declOfNumComments } from '../../../../../helpers';
import { proxyApi } from '../../../../../utils/axiosInstances';

function Footer({
  likes,
  reviewId,
  dislikes,
  commentCount,
  isOpenComments,
  setIsOpenComments,
}) {
  const reactionHandler = useCallback(
    async (indicator) => {
      await proxyApi.post('/reactions', {
        indicator,
        review: reviewId,
      });
    },
    [reviewId],
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
