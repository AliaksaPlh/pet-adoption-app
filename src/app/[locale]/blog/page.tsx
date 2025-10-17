import Page from '@/components/layout/page/page';
import dynamic from 'next/dynamic';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';

const Blog = dynamic(() => import('@/components/layout/blog/blog'), {
  loading: () => <CircleLoader />,
});

export default function BlogPage() {
  return (
    <Page>
      <Blog />
    </Page>
  );
}
