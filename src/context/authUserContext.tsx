'use client';
import { createContext, useContext, ReactNode } from 'react';
import useFirebaseAuth from '@/firebase/useFirebaseAuth';
import { AuthUserContextType } from '@/types/types';

const authUserContext = createContext<AuthUserContextType>({
  authUser: null,
  loading: true,
});

export function AuthUserProvider({ children }: { children: ReactNode }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
