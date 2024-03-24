import React, { ReactNode } from 'react';
import styles from './Layout.module.scss'
import Header from 'src/modules/layout/components/header';
import Footer from 'src/modules/layout/components/footer/Footer';

export default function Layout({ children, }: {
  children: ReactNode
}) {
  return (
    <div className={styles.root}>
      <div className={styles.root__children}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}