import { onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IAuthContext {
  authUid: string | null;
}
interface ContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
  authUid: null,
});

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [authUid, setAuthUid] = useLocalStorage('user', null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setAuthUid(uid);
        console.log(authUid);
      } else {
        // User is signed out
        // ...
        console.log('user is logged out');
        setAuthUid(null);
      }
    });
  }, []);

  const initialContext: IAuthContext = useMemo(
    () => ({
      authUid,
    }),
    [authUid]
  );
  return <AuthContext.Provider value={initialContext}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
