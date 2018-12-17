import React from 'react';
import styles from './Header.less';

const Header = () => (
  <div className={styles.header}>
    <h1>{ CONFIG.sitename }</h1>
  </div>
);

export default Header;
