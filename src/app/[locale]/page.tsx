'use client';

import Page from '@/components/layout/page/page';
import HomeContent from '@/components/ui/home-content/home-content';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <Page>
      <div>
        <HomeContent />
      </div>
    </Page>
  );
}
