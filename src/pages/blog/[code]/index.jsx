import React from 'react';
import Main from 'layouts/Main';
import Post from 'containers/Post';
import NAVIGATION from 'library/navigation';
import PostsServices from 'api/services/posts';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';

function PostPage({ categories, post }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const items = [
    { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
    { value: 'blog', caption: 'Блог', navigation: NAVIGATION.blog },
    {
      value: 'current',
      caption: post.attributes.title,
    },
  ];

  return (
    <Main
      displayBackTopButton
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <main>
        <section>
          <DynamicBreadcrumb items={items} />
        </section>

        <section>
          <Post text={post.attributes.text} />
        </section>
      </main>
    </Main>
  );
}

export async function getServerSideProps({ params }) {
  const categories = await CategoriesServices.getList();
  const post = await PostsServices.getOneByUID(params.code);

  return {
    props: {
      post,
      categories,
    },
  };
}

export default React.memo(PostPage);
