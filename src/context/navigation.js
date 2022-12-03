import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // update url when back/fwd button is clicked in browser
  useEffect(() => {
    const handler = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handler);

    return () => window.removeEventListener("popstate", handler);
  }, []);

  // update url for links
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return <NavigationContext.Provider value={{ currentPath, navigate }}>{children}</NavigationContext.Provider>;
};

export { NavigationProvider };
export default NavigationContext;
