import React from 'react';
import styles from './SocialMedia.module.scss';
import SoacialMediaData from './social-media-data';
import { SocialMediaType } from '@/src/modules/layout/libraries/footer-types';


export default function SocialMedia() {
  return (
    <>
      {SoacialMediaData && SoacialMediaData.length > 0 && (
        <div className={styles.root}>
          {SoacialMediaData.map((SocialMedia: SocialMediaType, index: number) => (
            <a
              key={`social-media-${index}`}
              href={SocialMedia.link}
            >
             {SocialMedia.icon}
            </a>
          ))}
        </div>
      )}
    </>
  );
}