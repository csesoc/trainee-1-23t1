import { onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, DocumentData, getDoc } from 'firebase/firestore';

interface IAppContext {
  user: DocumentData | null;
  setUser: (newUser: DocumentData) => void;
}
interface ContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  user: null,
  setUser: () => {},
});

const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<DocumentData | null>(null);

  const initialContext: IAppContext = { user, setUser };

  return <AppContext.Provider value={initialContext}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
