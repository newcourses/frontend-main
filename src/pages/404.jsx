import Main from 'layouts/Main';
import React, { useEffect, useState } from 'react';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import useProxyApi from 'hooks/useProxyApi';
import { CATEGORIES } from 'library/routers';

function NotFound() {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const [categories, setCategories] = useState([]);
  const { request } = useProxyApi();

  useEffect(() => {
    (async () => {
      setCategories(await request(CATEGORIES));
    })();
  }, [request]);

  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <div>
        <main>404 ERROR</main>
      </div>
    </Main>
  );
}

export default React.memo(NotFound);
