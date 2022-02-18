import React from 'react';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import css from './index.module.scss';
import mainBanner from '../../assets/images/bg.svg';

function MainBanner({ setVisibleDrawer }) {
  return (
    <div className={css.container}>
      <div>
        <h1>
          Сравниваем курсы <br />
          онлайн-школ
        </h1>
        <p>
          Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик курсов.
          Выбирайте курсы по отзывам, цене, продолжительности и другим
          критериям!
        </p>
        <Button
          onClick={() => setVisibleDrawer(true)}
          type="primary"
          size="large"
          className={css.button}
        >
          <span className={css.textButton} style={{ display: 'block' }}>
            Все категории курсов
            <DownOutlined style={{ marginLeft: '10px' }} />
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
