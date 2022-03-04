function countReactions(reactions = []) {
  const likes = reactions.filter((reaction) => reaction.attributes.indicator);
  const dislikes = reactions.filter(
    (reaction) => !reaction.attributes.indicator,
  );

  return {
    likes: likes.length,
    dislikes: dislikes.length,
  };
}
function prepareSchoolReviews(reviews) {
  return reviews.map((review) => {
    const countReactionReview = countReactions(
      review.attributes.reactions.data,
    );
    review.attributes.likes = countReactionReview.likes;
    review.attributes.dislikes = countReactionReview.dislikes;

    review.attributes.comments.data = review.attributes.comments.data.map(
      (comment) => {
        const countReactionComment = countReactions(
          comment.attributes.reactions.data,
        );
        comment.attributes.likes = countReactionComment.likes;
        comment.attributes.dislikes = countReactionComment.dislikes;
        delete comment.attributes.reactions;
        return comment;
      },
    );

    delete review.attributes.reactions;
    return review;
  });
}

export default prepareSchoolReviews;
