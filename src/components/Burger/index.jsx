import React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

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

export default React.memo(Burger);
