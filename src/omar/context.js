import { createContext, useContext } from "react";

// Keep the shared state context stable when feature views refresh during development.
export const Al = createContext(null);
export const me = () => useContext(Al);
