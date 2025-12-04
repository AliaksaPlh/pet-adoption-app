import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const PetList = dynamic(() => import('@/components/ui/pet-list/pet-list'), {
  loading: () => <CircleLoader />,
});

export default function PetsPage() {
  return (
    <Page>
      <PetList />
    </Page>
  );
}
