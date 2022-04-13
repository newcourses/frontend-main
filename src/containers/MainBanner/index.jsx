import React from 'react';
import mainBanner from 'assets/images/bg.svg';
import AllCategoriesButton from 'components/AllCategoriesButton';
import css from './index.module.scss';

function MainBanner({ setVisibleDrawer }) {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Сравниваем курсы онлайн-школ</h1>
        <p>
          Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик курсов.
          Выбирайте курсы по отзывам, цене, продолжительности и другим
          критериям!
        </p>
        <div style={{ marginTop: 80 }}>
          <AllCategoriesButton
            styleTextButton={css.textButton}
            setVisibleDrawer={setVisibleDrawer}
            height={70}
            width="100%"
          />
        </div>
      </div>
      <img className={css.img} src={mainBanner.src} alt="mainBanner" />
    </div>
  );
}

export default React.memo(MainBanner);
