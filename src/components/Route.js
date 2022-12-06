import { useContext } from "react";
import { NavigationContext } from "../context";

const Route = ({ path, children, onPath }) => {
  let { currentPath } = useContext(NavigationContext);

  if (String(currentPath).startsWith("/campaign")) currentPath = "/campaign";
  if (path === currentPath) return children;
  return null;
};

export default Route;
