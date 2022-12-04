import React, { useCallback, useState } from 'react';
import Logo from 'components/Logo';
import { Drawer, Space } from 'antd';
import Burger from 'components/Burger';
import NAVIGATION from 'library/navigation';
import { CloseOutlined } from '@ant-design/icons';
import logoDark from 'assets/images/logo-dark.png';
import AllCategoriesButton from 'components/AllCategoriesButton';
import css from './index.module.scss';
import DynamicNav from './DynamicNav';

function Header({ setVisibleDrawer }) {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const openBurger = useCallback((state) => () => setIsOpenBurger(state), []);

  return (
    <header className={css.container}>
      <Logo logo={logoDark} />

      <nav>
        <Drawer
          headerStyle={{ backgroundColor: '#ffefd7' }}
          bodyStyle={{ backgroundColor: '#ffefd7' }}
          onClose={openBurger(false)}
          visible={isOpenBurger}
          height="min-content"
          placement="right"
          closable={false}
        >
          <Space>
            <CloseOutlined
              className={css.closeIcon}
              onClick={openBurger(false)}
            />
          </Space>
          <DynamicNav
            links={[
              NAVIGATION.promoCodes,
              NAVIGATION.schoolsList,
              NAVIGATION.contacts,
              NAVIGATION.freeCourses,
              NAVIGATION.about,
            ]}
            addition={
              <div
                role="button"
                tabIndex="0"
                onClick={() => {
                  openBurger(false)();
                  setVisibleDrawer(true);
                }}
              >
                Все категории курсов
              </div>
            }
          />
        </Drawer>
      </nav>
      <Burger handler={openBurger(true)} />

      <nav className={css.nav}>
        <AllCategoriesButton
          styleTextButton={css.textButton}
          setVisibleDrawer={setVisibleDrawer}
          width={250}
          height={45}
        />

        <DynamicNav
          links={[
            NAVIGATION.promoCodes,
            NAVIGATION.schoolsList,
            NAVIGATION.freeCourses,
          ]}
        />
      </nav>
    </header>
  );
}

export default React.memo(Header);
