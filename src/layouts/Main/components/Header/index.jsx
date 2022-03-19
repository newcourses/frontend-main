import React from 'react';
import Logo from 'components/Logo';
import NAVIGATION from 'library/navigation';
import logoDark from 'assets/images/logo-dark.png';
import AllCategoriesButton from 'components/AllCategoriesButton';
import DynamicNav from './DynamicNav';
import css from './index.module.scss';

function Header({ setVisibleDrawer }) {
  return (
    <header className={css.container}>
      <Logo logo={logoDark} />
      <nav className={css.navMobile}>BURGER</nav>
      <nav className={css.nav}>
        <AllCategoriesButton
          styleTextButton={css.textButton}
          setVisibleDrawer={setVisibleDrawer}
          width={250}
          height={45}
        />

        <DynamicNav
          links={[
            NAVIGATION.about,
            NAVIGATION.schoolsList,
            NAVIGATION.contacts,
          ]}
        />
      </nav>
    </header>
  );
}

export default React.memo(Header);
