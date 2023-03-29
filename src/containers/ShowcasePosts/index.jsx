import React from 'react';
import PostCard from 'components/PostCard';
import Title from 'shared/ui/Title';
import css from './index.module.scss';
import EmptyPosts from './EmptyPosts';

export default function ShowcasePosts({ posts, setVisibleDrawer }) {
  return (
    <>
      <Title text="Блог" />
      {posts.length ? (
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
      ) : (
        <EmptyPosts setVisibleDrawer={setVisibleDrawer} />
      )}
    </>
  );
}
