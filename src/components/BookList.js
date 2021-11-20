import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <Link style={{ color: 'mintcream', fontSize: '26px' }} key="1" to="/">
          Books &nbsp;
        </Link>
        <Link
          style={{ color: 'mintcream', fontSize: '26px' }}
          key="2"
          to="/categories"
        >
          Categories &nbsp;
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
