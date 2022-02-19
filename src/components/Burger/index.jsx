import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

function Burger() {
  return (
    <Menu customBurgerIcon={<div>TEST</div>}>
      <Link className="menu-item" href="/">
        <a>Home</a>
      </Link>
      <Link className="menu-item" href="/">
        <a>About</a>
      </Link>
      <Link className="menu-item" href="/">
        <a>Contact</a>
      </Link>
      <Link className="menu-item" href="/">
        <a>Settings</a>
      </Link>
    </Menu>
  );
}

Burger.propTypes = {};

export default React.memo(Burger);
