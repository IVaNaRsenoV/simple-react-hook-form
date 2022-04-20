import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={styles.firstStep}>
      <Link to="/step1">Начать</Link>
      <Outlet />
    </div>
  );
};
