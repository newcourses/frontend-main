import React from 'react';
import PostCard from 'components/PostCard';
import Title from 'shared/ui/Title';
import css from './index.module.scss';

export default function ShowcasePosts({ posts }) {
  return (
    <>
      <Title text="Блог" />
      <div className={css.wrapperList}>
        {posts.map(({ attributes: post }) => (
          <PostCard
            uid={post.uid}
            title={post.title}
            date={post.date}
            preview={post.preview}
            banner={post.banner}
          />
        ))}
      </div>
    </>
  );
}
