import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserTable.module.scss";
import classNames from "classnames";
import {
  setCurrentPageAction,
  setCurrentUserAction,
} from "../../store/users/actions";

const UserTable = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector((state) => state.filteredUsers);
  const currentPage = useSelector((state) => state.currentPage);
  const showBy = useSelector((state) => state.showBy);

  const [currentId, setCurrentId] = useState(1);
  const [currentKey, setCurrentKey] = useState("id");
  const [selectedUser, setSelectedUser] = useState(null);
  const [inverse, setInverse] = useState(false);

  const headerItems = [
    { id: 1, key: "id", name: "ID" },
    { id: 2, key: "firstName", name: "First name" },
    { id: 3, key: "lastName", name: "Last name" },
    { id: 4, key: "email", name: "Email" },
    { id: 5, key: "phone", name: "Phone" },
    { id: 6, key: "adress", name: "State" },
  ];
  
  const end = currentPage * showBy;
  const begin = end - showBy;
  let currentChunk = [];

  if (end > filteredUsers.length - 1) {
    currentChunk = filteredUsers.slice(begin);
  } else {
    currentChunk = filteredUsers.slice(begin, end);
  }

  if (!inverse) {
    currentChunk.sort((a, b) => {
      if (currentKey === "adress") {
        if (a.adress.state > b.adress.state) {
          return 1;
        }
        if (a.adress.state < b.adress.state) {
          return -1;
        }
        return 0;
      } else {
        if (a[currentKey] > b[currentKey]) {
          return 1;
        }
        if (a[currentKey] < b[currentKey]) {
          return -1;
        }
        return 0;
      }
    });
  } else {
    currentChunk.sort((a, b) => {
      if (currentKey === "adress") {
        if (a.adress.state > b.adress.state) {
          return -1;
        }
        if (a.adress.state < b.adress.state) {
          return 1;
        }
        return 0;
      } else {
        if (a[currentKey] > b[currentKey]) {
          return -1;
        }
        if (a[currentKey] < b[currentKey]) {
          return 1;
        }
        return 0;
      }
    });
  }

  const handleHeaderClick = (id, key) => {
    setCurrentId(id);
    setCurrentKey(key);
    if (id === currentId) {
      setInverse(id);
    }
    if (id === inverse) {
      setInverse(null);
    }
  };
  const handleRowClick = (item) => {
    setSelectedUser(item.id + item.lastName);
    dispatch(setCurrentUserAction(item));
  };

  return (
    <div className={styles.UserTable}>
      {currentChunk.length > 0 ? (
        <table className={styles.Table}>
          <thead>
            <tr className={styles.TableHeader}>
              {headerItems.map((item, index) => (
                <th
                  className={classNames(styles.TableHeaderCell, {
                    [styles.TableHeaderCell_active]: currentId === item.id,
                    [styles.TableHeaderCell_inverse]: inverse,
                  })}
                  key={item.id}
                  onClick={() => handleHeaderClick(item.id, item.key)}
                >
                  <p>{item.name}</p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentChunk.map((item, index) => (
              <tr
                className={classNames(styles.TableRow, {
                  [styles.TableRow_selected]:
                    item.id + item.lastName === selectedUser,
                })}
                key={item.id + index}
                onClick={() => handleRowClick(item)}
              >
                <td className={styles.TableRowCell}>{item.id}</td>
                <td className={styles.TableRowCell}>{item.firstName}</td>
                <td className={styles.TableRowCell}>{item.lastName}</td>
                <td className={styles.TableRowCell}>{item.email}</td>
                <td className={styles.TableRowCell}>{item.phone}</td>
                <td className={styles.TableRowCell}>{item.adress.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.noResultsText}>No results found</div>
      )}
    </div>
  );
};

export default memo(UserTable);
