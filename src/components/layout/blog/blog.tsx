'use client';

import styles from './blog.module.scss';
import Page from '@/components/layout/page/page';

export default function Blog() {
  return (
    <Page>
      <section className={styles.wrapper}>
        <p>Blog</p>
      </section>
    </Page>
  );
}
