import { createContext, useContext } from "react";

interface IcourseContext {
    currCourse: string | null;
}

const courseContext = createContext<IcourseContext>({
    currCourse: null
});