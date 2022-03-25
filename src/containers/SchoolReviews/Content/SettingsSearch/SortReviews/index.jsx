import { Popover } from 'antd';
import React, { useCallback, useState } from 'react';
import css from './index.module.scss';

const buttons = [
  // TODO написать маршрут для получение популярных отзывов о школе
  // { caption: 'По популярности', type: 'populate' },
  { caption: 'Сначала новые', type: 'new', sort: 'date:desc' },
  { caption: 'Сначала старые', type: 'old', sort: 'date:asc' },
  { caption: 'Сначала отрицательные', type: 'negative', sort: 'grade:asc' },
  { caption: 'Сначала позитивные', type: 'positive', sort: 'grade:desc' },
];

function SortReviews({ setSort }) {
  const [activeSort, setActiveSort] = useState(0);
  const [openPopover, setOpenPopover] = useState(false);

  const changeSort = useCallback(
    (index) => {
      setSort(buttons[index]);
      setOpenPopover(false);
      setActiveSort(index);
    },
    [setSort],
  );
  return (
    <div className={css.wrapper}>
      <span className={css.title}>Сортировка: </span>
      <Popover
        visible={openPopover}
        placement="bottomLeft"
        content={
          <div>
            {buttons.map(({ caption }, index) => (
              <button
                className={css.button}
                type="button"
                key={caption}
                onClick={() => changeSort(index)}
              >
                {caption}
              </button>
            ))}
          </div>
        }
        trigger="hover"
      >
        <button
          className={css.button}
          onClick={() => setOpenPopover(!openPopover)}
        >
          {buttons[activeSort].caption}
        </button>
      </Popover>
    </div>
  );
}

export default React.memo(SortReviews);
