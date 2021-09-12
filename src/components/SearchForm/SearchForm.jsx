import React, { useState } from "react";
import styles from "./SearchForm.module.scss";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredUsersAction } from "../../store/users/actions";

const SearchForm = () => {
  const users = useSelector((state) => state.users);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    const searchValue = new RegExp(value.toLocaleLowerCase());
    const filteredUsers = users.filter(
      (user) =>
        user.firstName.toLocaleLowerCase().match(searchValue) ||
        user.lastName.toLocaleLowerCase().match(searchValue)
    );
    console.log(filteredUsers);
    setValue("");
    dispatch(setFilteredUsersAction(filteredUsers));
  };
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter user name"
        className={styles.input}
        onChange={onHandleChange}
        value={value}
      />
      <button type="submit" className={styles.searchBtn}>
        <MdSearch />
      </button>
    </form>
  );
};

export default SearchForm;
