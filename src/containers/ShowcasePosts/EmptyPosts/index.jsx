import React from 'react';
import { Empty } from 'antd';
import AllCategoriesButton from 'components/AllCategoriesButton';
import css from './index.module.scss';

export default function EmptyPosts({ setVisibleDrawer }) {
  return (
    <div style={{ margin: '40px' }}>
      <Empty
        description={
          <div className={css.emptyText}>
            Пока наши специалисты готовят для вас статьи. Вы можете выбрать
            курс.
          </div>
        }
      >
        <AllCategoriesButton
          classNames={css.button}
          styleTextButton={css.textButton}
          setVisibleDrawer={setVisibleDrawer}
        />
      </Empty>
    </div>
  );
}
