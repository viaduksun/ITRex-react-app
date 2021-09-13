import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <p className={styles.footerText}>Kyiv 2021</p>
      </div>
    </div>
  );
};

export default Footer;
