import { useCallback, useEffect, useState } from 'react';
import getSchoolReviews from '../../../controllers/getSchoolReviews';
import { prepareSchoolReviews } from '../../../helpers/preparersData';

function useLoadReviews({ initReviews }) {
  const [reviews, setReviews] = useState(initReviews.data);
  const [sortType, setSortType] = useState({});
  const [pageSize, setPageSize] = useState(null);
  const [page, setPage] = useState(1);

  const customGetSchoolReviews = useCallback(
    async (actualPage) =>
      getSchoolReviews({
        code: 'skillfactory',
        sort: sortType.sort,
        pagination: {
          page: actualPage,
          pageSize,
        },
      }),
    [pageSize, sortType.sort],
  );

  useEffect(() => {
    if (sortType.sort || pageSize) {
      (async function loadReviews() {
        const data = await customGetSchoolReviews(1);
        setPage(1);
        setReviews(prepareSchoolReviews(data.data));
      })();
    }
  }, [customGetSchoolReviews, sortType, pageSize]);

  useEffect(() => {
    if (page !== 1) {
      (async function loadReviews() {
        const data = await customGetSchoolReviews(page);
        setReviews([...reviews, ...prepareSchoolReviews(data.data)]);
      })();
    }
    // eslint-disable-next-line
  }, [customGetSchoolReviews, page]);

  return {
    page,
    setPage,
    reviews,
    pageSize,
    setPageSize,
    setSortType,
  };
}

export default useLoadReviews;
