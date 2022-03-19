import React, { useState } from 'react';
import css from './index.module.scss';
import Title from './components/Title';
import Footer from './components/Footer';
import Header from './components/Header';
import Comment from './components/Comment';

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
}) {
  const [isOpenComments, setIsOpenComments] = useState(false);

  return (
    <div className={css.container}>
      <Header date={date} name={reviewer.data.attributes.name} grade={grade} />
      <hr />
      <Title title={title} text={text} />
      <Footer
        likes={likes}
        dislikes={dislikes}
        reviewId={reviewId}
        isOpenComments={isOpenComments}
        commentCount={comments.data.length}
        setIsOpenComments={setIsOpenComments}
      />

      {comments.data.map((comment) => (
        <Comment
          key={comment.id}
          commentId={comment.id}
          {...comment.attributes}
          isOpened={isOpenComments}
        />
      ))}
    </div>
  );
}

export default React.memo(Review);
