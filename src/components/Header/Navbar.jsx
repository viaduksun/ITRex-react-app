import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <ul className={styles.Navbar}>
      <NavLink
        exact
        to="/"
        className={styles.NavbarItem}
        activeClassName={styles.NavbarItem_active}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        className={styles.NavbarItem}
        activeClassName={styles.NavbarItem_active}
      >
        About
      </NavLink>
    </ul>
  );
};

export default Navbar;
