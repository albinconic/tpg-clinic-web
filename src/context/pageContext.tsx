import { createContext, useContext } from "react";

export const PageContext = createContext<{pageId: string}>({pageId: ''});

export const usePage = () => useContext(PageContext);