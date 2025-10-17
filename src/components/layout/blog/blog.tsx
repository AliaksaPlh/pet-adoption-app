'use client';

import { useState, useEffect } from 'react';
import styles from './pets.module.scss';
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
