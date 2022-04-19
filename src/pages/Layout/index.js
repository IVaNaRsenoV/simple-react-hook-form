import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Link to="/step1">Дальше</Link>
      <Outlet />
    </div>
  );
};
