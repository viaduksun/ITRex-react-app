import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ActionsBlock from "../../components/ActionsBlock/ActionsBlock";
import Pagination from "../../components/Pagination/Pagination";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import UserTable from "../../components/UserTable/UserTable";
import { setUsersAction } from "../../store/users/actions";
import styles from "./Users.module.scss";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsersAction());
  }, [dispatch]);
  return (
    <div className={styles.Users}>
      <div className="container">
        <ActionsBlock />
        <UserTable />
        <Pagination />
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Users;
