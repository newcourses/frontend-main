import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import css from './Header.module.scss';
import DynamicNav from './DynamicNav/DynamicNav';
import Logo from '../../../../components/Logo/Logo';
import NAVIGATION from '../../../../library/navigation';
import logoDark from '../../../../assets/images/logo-dark.png';

function Header({ setVisibleDrawer }) {
  return (
    <header className={css.container}>
      <Logo logo={logoDark} />
      <nav className={css.nav}>
        <Button
          onClick={() => setVisibleDrawer(true)}
          type="primary"
          size="large"
          style={{ height: '45px', width: '250px' }}
        >
          <div className={css.textButton}>
            Все категории курсов
            <DownOutlined style={{ marginLeft: '10px' }} />
          </div>
        </Button>

        <DynamicNav links={[NAVIGATION.about, NAVIGATION.contacts]} />
      </nav>
    </header>
  );
}

Header.propTypes = {
  setVisibleDrawer: PropTypes.func,
};

Header.defaultProps = {
  setVisibleDrawer: () => {},
};

export default React.memo(Header);
