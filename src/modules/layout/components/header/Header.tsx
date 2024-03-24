import React from 'react'
import styles from './Header.module.scss';
import Button from 'src/modules/general/components/button';
import NewsIcon from 'src/modules/general/components/icons/news';
import LoginIcon from 'src/modules/general/components/icons/login';

export default function Header() {
  return (
    <div className={styles.root}>
      <NewsIcon />
      <div className={styles.root__actions}>
      <Button variant='contained'>
        {`Subscribe`}
      </Button>
      <LoginIcon />
      </div>
    </div>
  );
}