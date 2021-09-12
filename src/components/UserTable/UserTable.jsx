import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./UserTable.module.scss";
import classNames from "classnames";

const UserTable = () => {
  const users = useSelector((state) => state.users);
  const currentPage = useSelector((state) => state.currentPage);
  const showBy = useSelector((state) => state.showBy);

  const [currentId, setCurrentId] = useState(1);
  const [currentKey, setCurrentKey] = useState("id");
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

  if (end > users.length - 1) {
    currentChunk = users.slice(begin);
  } else {
    currentChunk = users.slice(begin, end);
  }
  // ===SORTING ===
  // function ascendingSort(a, b) {
  //   return a - b;
  // }
  // function descendingSort(a, b) {
  //   return b - a;
  // }
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
  // console.log(end);
  // console.log(begin);
  console.log(currentChunk);

  const handleHeaderClick = (id, key) => {
    console.log(key);
    setCurrentId(id);
    setCurrentKey(key);
    if (id === currentId) {
      setInverse(id);
    }
    if (id === inverse) {
      setInverse(null);
    }
  };

  return (
    <div className={styles.UserTable}>
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
            <tr className={styles.TableRow} key={item.id + index}>
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
    </div>
  );
};

export default memo(UserTable);
