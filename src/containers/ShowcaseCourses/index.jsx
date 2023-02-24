import React, { useCallback, useEffect, useState } from 'react';
import CourseCard from 'components/CourseCard';
import { Pagination } from 'antd';
import css from './index.module.scss';
import { declOfNumOnlineCourses } from '../../helpers/declOfNumInstances';

const PAGE_COUNT = 12;
const DEFAULT_PAGE_COUNT = 24;
const WEIGHTS = [1, 2, 4, 6, 10];
const PAGE_COUNT_HEIGHT = WEIGHTS.map((elem) => elem * PAGE_COUNT);
const PAGE = 1;

function ShowcaseCourses({ cards, title }) {
  const [currPageSize, setPageCount] = useState(DEFAULT_PAGE_COUNT);
  const [currPage, setPage] = useState(PAGE);
  const [data, setData] = useState(
    cards.slice(currPageSize * (currPage - 1), currPageSize * currPage),
  );

  useEffect(() => {
    setData(
      cards.slice(currPageSize * (currPage - 1), currPageSize * currPage),
    );
  }, [currPageSize, currPage, cards]);

  const onChange = useCallback((page, pageSize) => {
    setPageCount(pageSize);
    setPage(page);
  }, []);
  return (
    <div>
      <h3 className={css.title}>{title}</h3>

      <div className={css.wrapperList}>
        {data.map(({ id, attributes }) => (
          <CourseCard key={id} {...attributes} />
        ))}
      </div>
      <div className={css.wrapperPagination}>
        <Pagination
          total={cards.length}
          showTotal={(total) => `Всего ${declOfNumOnlineCourses(total, true)}`}
          defaultPageSize={DEFAULT_PAGE_COUNT}
          defaultCurrent={PAGE}
          current={currPage}
          pageSize={currPageSize}
          onChange={onChange}
          pageSizeOptions={PAGE_COUNT_HEIGHT}
        />
      </div>
    </div>
  );
}

export default React.memo(ShowcaseCourses);
