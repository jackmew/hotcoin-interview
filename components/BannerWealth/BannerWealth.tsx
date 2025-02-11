import React from 'react';
import styles from './BannerWealth.module.css';

export interface BannerWealthProps {
  title?: string;
  subtitle?: string;
}

export const BannerWealth: React.FC<BannerWealthProps> = ({
  title = '稳定生息，简单赚币', // Default title in Chinese
  subtitle = '投资保本型产品，赚取稳定收益', // Default subtitle in Chinese
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.image} />
      </div>
    </div>
  );
};

export default BannerWealth;
