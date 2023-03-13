import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import ShowcasePosts from 'containers/ShowcasePosts';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import PostController from 'controllers/post';

const items = [
  { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
  { value: 'current', caption: 'Блог' },
];

function Blog({ categories, posts }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

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
          <ShowcasePosts
            setVisibleDrawer={setVisibleDrawer}
            posts={posts.data}
          />
        </section>
      </main>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();
  const posts = await PostController.getList();

  return {
    props: {
      posts,
      categories,
    },
  };
}

export default React.memo(Blog);
