import { useLocation, NavLink } from "react-router-dom";

function CustomNavLink({ to, children, onClick, ...rest }) {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (onClick) onClick(e);
  };

  return (
    <NavLink to={to} onClick={handleClick} {...rest}>
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
