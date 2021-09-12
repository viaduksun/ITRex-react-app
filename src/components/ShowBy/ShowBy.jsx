import React from "react";
import { useDispatch } from "react-redux";
import { setShowByAction } from "../../store/users/actions";
import styles from "./ShowBy.module.scss";

const ShowBy = () => {
  const dispatch = useDispatch();
  const selectOptions = [
    { id: 1, name: "Show by 5", value: 5, disabled: false },
    { id: 2, name: "Show by 10", value: 10, disabled: false },
    { id: 2, name: "Show by 15", value: 15, disabled: false },
    { id: 2, name: "Show by 20", value: 20, disabled: false },
    { id: 2, name: "Users per page", value: 0, disabled: true },
  ];
  const options = selectOptions.map((item) => (
    <option
      value={item.value}
      key={item.id}
      selected={item.disabled}
      disabled={item.disabled}
      hidden={item.disabled}
    >
      {item.name}
    </option>
  ));
  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(setShowByAction(e.target.value));
  };
  return (
    <div className={styles.ShowBy}>
      <form onSubmit={handleSelect}>
        <select className={styles.select} onChange={handleSelect}>
          {options}
        </select>
      </form>
    </div>
  );
};

export default ShowBy;
