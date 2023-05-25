import { createContext, ReactNode, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { CourseList } from '../interfaces/courses';

interface IAppContext {
  user: DocumentData | null;
  setUser: (newUser: DocumentData) => void;
  courseList: CourseList[];
  setCourseList: (newCourseList: CourseList[]) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  user: null,
  setUser: () => {},
  courseList: [],
  setCourseList: () => {},
});

const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<DocumentData | null>(null);
  const [courseList, setCourseList] = useState<CourseList[]>([]);

  const initialContext: IAppContext = { user, setUser, courseList, setCourseList };
  
  return <AppContext.Provider value={initialContext}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
