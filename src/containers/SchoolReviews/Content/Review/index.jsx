import React, { useState } from 'react';
import css from './index.module.scss';
import Title from './components/Title';
import Footer from './components/Footer';
import Header from './components/Header';
import Comment from './components/Comment';
import LeaveComment from './components/LeaveComment';

function Review({
  text,
  date,
  grade,
  likes,
  title,
  reviewId,
  comments,
  dislikes,
  reviewer,
  schoolName,
}) {
  const [isOpenComments, setIsOpenComments] = useState(false);
  const [isOpenedLeaveComment, setIsOpenedLeaveComment] = useState(false);

  return (
    <div
      className={css.container}
      itemScope
      itemType="http://schema.org/Review"
    >
      <Header
        date={date}
        grade={grade}
        schoolName={schoolName}
        name={reviewer.data?.attributes?.name}
      />
      <hr />
      <Title title={title} text={text} />
      <Footer
        likes={likes}
        dislikes={dislikes}
        reviewId={reviewId}
        isOpenComments={isOpenComments}
        commentCount={comments.data.length}
        setIsOpenComments={setIsOpenComments}
        isOpenedLeaveComment={isOpenedLeaveComment}
        setIsOpenedLeaveComment={setIsOpenedLeaveComment}
      />

      {comments.data.map((comment) => (
        <Comment
          key={comment.id}
          commentId={comment.id}
          {...comment.attributes}
          isOpened={isOpenComments}
        />
      ))}

      <LeaveComment reviewId={reviewId} isOpened={isOpenedLeaveComment} />
    </div>
  );
}

export default React.memo(Review);
