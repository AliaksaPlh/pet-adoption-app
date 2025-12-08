import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const Account = dynamic(() => import('@/components/layout/account/account'), {
  loading: () => <CircleLoader />,
});

export default function AccountPage() {
  return (
    <Page>
      <Account />
    </Page>
  );
}
