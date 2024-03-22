import React, { ReactNode } from 'react';
import styles from './Layout.module.scss'
import Header from '../header';

export default function Layout({ children, }: {
  children: ReactNode
}) {
  return (
    <div className={styles.root}>
      <div className={styles.root__children}>
        <Header />
        {children}
      </div>
    </div>
  );
}