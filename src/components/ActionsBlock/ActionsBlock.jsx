import React from "react";
import FilterForm from "../FilterForm/FilterForm";
import SearchForm from "../SearchForm/SearchForm";
import ShowBy from "../ShowBy/ShowBy";
import styles from "./ActionsBlock.module.scss";

const ActionsBlock = () => {
  
  return (
    <div className={styles.ActionsBlock}>
      <SearchForm />
      <div className={styles.group}>
        <ShowBy />
        <FilterForm />
      </div>
    </div>
  );
};

export default ActionsBlock;
