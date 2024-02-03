import { REVIEWS } from 'library/routers';
import useProxyApi from 'hooks/useProxyApi';
import { useCallback, useEffect, useState } from 'react';
import { prepareSchoolReviews } from 'helpers/preparersData';
import qs from 'qs';

function useLoadReviews({ initReviews, schoolCode }) {
  const [reviews, setReviews] = useState(initReviews);
  const [sortType, setSortType] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const { request } = useProxyApi();

  const customGetSchoolReviews = useCallback(
    async (actualPage) => {
      const query = qs.stringify(
        {
          schoolCode,
          sort: sortType.sort,
          pagination: {
            page: actualPage,
            pageSize,
          },
        },
        { encodeValuesOnly: true },
      );
      return request(`${REVIEWS}/?${query}`);
    },
    [pageSize, request, schoolCode, sortType.sort],
  );

  useEffect(() => {
    if (sortType.sort || pageSize) {
      (async function loadReviews() {
        const data = await customGetSchoolReviews(1);
        setPage(1);
        setReviews([...prepareSchoolReviews(data.data)]);
        // setReviews([]);
      })();
    }
    // eslint-disable-next-line
  }, [sortType.sort, pageSize]);

  useEffect(() => {
    if (page !== 1) {
      (async function loadReviews() {
        const data = await customGetSchoolReviews(page);
        setReviews([...reviews, ...prepareSchoolReviews(data.data)]);
      })();
    }
    // eslint-disable-next-line
  }, [page]);

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
