import React, { useEffect, useState } from 'react';
import Main from '../layouts/Main';
import useVisibleDrawer from '../hooks/useVisibleDrawer';
import getCategories from '../controllers/getCategories';

function NotFound() {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
    })();
  }, []);

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

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default React.memo(NotFound);
