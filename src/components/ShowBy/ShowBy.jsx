import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowByAction } from "../../store/users/actions";
import styles from "./ShowBy.module.scss";

const ShowBy = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("Show by 20");
  const selectOptions = [
    { id: 1, name: "Show by 20", value: 20, disabled: false },
    { id: 2, name: "Show by 15", value: 15, disabled: false },
    { id: 3, name: "Show by 10", value: 10, disabled: false },
    { id: 4, name: "Show by 5", value: 5, disabled: false },
  ];
  const options = selectOptions.map((item) => (
    <option value={item.value} key={item.id}>
      {item.name}
    </option>
  ));
  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(setShowByAction(e.target.value));
    setSelected(e.target.value);
  };
  return (
    <div className={styles.ShowBy}>
      <form onSubmit={handleSelect}>
        <select
          value={selected}
          className={styles.select}
          onChange={handleSelect}
        >
          {options}
        </select>
      </form>
    </div>
  );
};

export default ShowBy;
