import React from "react";
import styles from "./Header.module.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className="flex-row">
          <div className={styles.logo}>
            <img src="./img/logo.png" alt="logo" />
          </div>
          <h1 className={styles.title}>ITRex-react-app</h1>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
