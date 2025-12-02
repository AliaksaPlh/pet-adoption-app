import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const Favorites = dynamic(
  () => import('@/components/layout/favorites/favorites'),
  {
    loading: () => <CircleLoader />,
  }
);

export default function FavoritesPage() {
  return (
    <Page>
      <Favorites />
    </Page>
  );
}
