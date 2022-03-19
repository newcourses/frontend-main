import { REACTIONS } from '../library/routers';

function createReaction({
  likes,
  request,
  setLikes,
  dislikes,
  reviewId,
  commentId,
  setDislikes,
}) {
  return async (indicator) => {
    await request(REACTIONS, 'POST', null, {
      indicator,
      review: reviewId,
      comment: commentId,
    });

    if (indicator) {
      setLikes(likes + 1);
    } else {
      setDislikes(dislikes + 1);
    }
  };
}

export default createReaction;
