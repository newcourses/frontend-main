import React from 'react';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import css from './MainBanner.module.scss';
import mainBanner from '../../assets/images/bg.svg';

function MainBanner({ setVisibleDrawer }) {
  return (
    <div className={css.container}>
      <div>
        <h1>Сравниваем курсы онлайн-школ</h1>
        <p>
          Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик курсов.
          Выбирайте курсы по отзывам, цене, продолжительности и другим
          критериям!
        </p>
        <Button
          onClick={() => setVisibleDrawer(true)}
          type="primary"
          size="large"
          style={{ height: '7rem', width: '43rem', marginTop: '8rem' }}
        >
          <span className={css.textButton} style={{ display: 'block' }}>
            Все категории курсов
            <DownOutlined style={{ marginLeft: '1rem' }} />
          </span>
        </Button>
      </div>
      <img className={css.img} src={mainBanner.src} alt="mainBanner" />
    </div>
  );
}

MainBanner.propTypes = {
  setVisibleDrawer: PropTypes.func,
};
MainBanner.defaultProps = {
  setVisibleDrawer: () => {},
};

export default React.memo(MainBanner);
