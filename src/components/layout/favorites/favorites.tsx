'use client';

import styles from './favorites.module.scss';
import Page from '@/components/layout/page/page';
import FavoritesList from '@/components/ui/favorites-list/favorites-list';

export default function Favorites() {
  return (
    <Page>
      <section className={styles.wrapper}>
        <FavoritesList />
      </section>
    </Page>
  );
}
