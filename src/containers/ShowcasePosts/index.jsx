import React from 'react';

import PostCard from 'components/PostCard';
import TitleContainer from 'components/TitleContainer';
import css from './index.module.scss';

export default function ShowcasePosts({ posts }) {
  return (
    <>
      <TitleContainer text="Блог" />
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
