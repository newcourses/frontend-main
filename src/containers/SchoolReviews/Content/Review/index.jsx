import React, { useState } from 'react';
import css from './index.module.scss';
import Footer from './Footer';
import Comment from './Comment';
import Header from './Header';
import Title from './Title';

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
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const like = () => {
    // setLikes(1);
    // setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    // setLikes(0);
    // setDislikes(1);
    setAction('disliked');
  };

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
          isOpened={isOpenComments}
          {...comment.attributes}
        />
      ))}
    </div>
  );
}

export default React.memo(Review);
