import React from 'react';
import SocialMedia from './social-media';
import styles from './Footer.module.scss';
import CopyrightIcon from 'src/modules/general/components/icons/copyright';

const date = new Date();

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.root__copyRight}>
      <CopyrightIcon />
      <span>
        {`${date.getFullYear()} Global News`}
      </span>
      </div>
      <SocialMedia />
    </div>
  );
}