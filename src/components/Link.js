import { useContext } from "react";
import { NavigationContext } from "../context";

const Link = ({ to, children, className }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
