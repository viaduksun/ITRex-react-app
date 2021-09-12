import React, { useState } from "react";
import styles from "./FilterForm.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  refreshAction,
  setCurrentPageAction,
  setFilteredUsersAction,
} from "../../store/users/actions";
import ResetBtn from "../UI/ResetBtn/ResetBtn";

const FilterForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [filterActive, setFilterActive] = useState(false);
  const [filterState, setFilterState] = useState({
    1: false,
  });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  // const states = users.map((user) => user.adress.state);
  // console.log(states);
  const filterOptions = users
    .map((user) => user.adress.state)
    .filter(onlyUnique)
    .map((item, index) => {
      return {
        id: index + 1,
        name: item,
        value: item.toLowerCase(),
        checked: false,
      };
    });
  // console.log(filterOptions);
  // setFilterState(filterOptions)
  // [
  //   { id: 1, name: "MN", value: "mn", checked: false },
  //   { id: 2, name: "OH", value: "oh", checked: false },
  //   { id: 3, name: "ND", value: "nd", checked: false },
  //   { id: 4, name: "AR", value: "ar", checked: false },
  // ];
  const handleReset = () => {
    console.log("Reset");
    setFilterState({
      1: false,
    });
    dispatch(refreshAction());
  };
  const handleClick = () => {
    setFilterActive(!filterActive);
  };
  const handleCheckbox = (id, value) => {
    console.log(id);
    setFilterState({ ...filterState, [id]: !filterState[id] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterActive(false);
    console.log(filterState);
    const selectedIDs = Object.keys(filterState).filter(
      (item) => filterState[item]
    );
    console.log(selectedIDs);
    const selectedOptions = [];
    selectedIDs.forEach((item) => {
      const currentItem = filterOptions.find((i) => i.id === +item);
      selectedOptions.push(currentItem);
    });
    console.log(selectedOptions);
    const filteredUsers = users.filter((user) => {
      for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].name === user.adress.state) {
          return true;
        }
      }
      return false;
    });
    console.log(filteredUsers);
    dispatch(setFilteredUsersAction(filteredUsers));
    dispatch(setCurrentPageAction(1));
  };
  return (
    <div className={styles.FilterFormWrapper}>
      <button
        className={classNames(styles.btn, {
          [styles.btn_active]: filterActive,
        })}
        onClick={handleClick}
      >
        Filter by state
        <MdKeyboardArrowDown className={styles.arrow} />
      </button>
      <form
        className={classNames(styles.dropdown, {
          [styles.dropdown_active]: filterActive,
        })}
        onSubmit={handleSubmit}
      >
        <div className={styles.itemsWrapper}>
        {filterOptions.map((item, i) => (
          <div
            className={styles.filterItem}
            key={item.id}
            onClick={() => handleCheckbox(item.id, item.value)}
          >
            <input
              type="checkBox"
              className={styles.checkBox}
              checked={filterState[item.id]}
              value={item.value}
            />
            <p className={item.title}>{item.name}</p>
          </div>
        ))}
        </div>        
        <button
          type="submit"
          className={styles.btnFilter}
          // onClick={handleFilter}
        >
          Filter
        </button>
      </form>
      <ResetBtn handleClick={handleReset} />
    </div>
  );
};

export default FilterForm;
