import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const Pets = dynamic(() => import('@/components/layout/pets/pets'), {
  loading: () => <CircleLoader />,
});

export default function PetsPage() {
  return (
    <Page>
      <Pets />
    </Page>
  );
}
