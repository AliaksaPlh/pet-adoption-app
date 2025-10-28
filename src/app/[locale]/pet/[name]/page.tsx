import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const Pet = dynamic(() => import('@/components/layout/pet/pet'), {
  loading: () => <CircleLoader />,
});

export default function PetDetailsPage() {
  return (
    <Page centered>
      <Pet />
    </Page>
  );
}
