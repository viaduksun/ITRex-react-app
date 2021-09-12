import React from "react";
import styles from "./ResetBtn.module.scss";
import { MdRefresh } from "react-icons/md";

const ResetBtn = ({ handleClick }) => {
  return (
    <button className={styles.reset} onClick={handleClick}>
      <MdRefresh />
    </button>
  );
};

export default ResetBtn;
