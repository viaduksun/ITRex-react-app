/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import classNames from "classnames";
import { setCurrentPageAction } from "../../store/users/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const showBy = useSelector((state) => state.showBy);
  const currentPage = useSelector((state) => state.currentPage);
  const pagesCount = Math.ceil(users.length / showBy);

  // const [currPagArr, setCurrPagArr] = useState([]);

  let pagesArr = [];
  let paginationArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }
  // console.log(pagesArr);

  if (pagesArr.length <= 7) {
    paginationArr = [...pagesArr];
  } else {
    if (currentPage <= 4) {
      paginationArr = [...pagesArr.slice(0, 5), "...", pagesArr.length];
    }
    if (
      currentPage > 4 &&
      currentPage <= pagesArr.length - 3 &&
      pagesArr.length >= 8
    ) {
      paginationArr = [
        1,
        "...",
        ...pagesArr.slice(currentPage - 2, currentPage + 1),
        "...",
        pagesArr.length,
      ];
    }
    if (currentPage > 5 && currentPage > pagesArr.length - 3) {
      paginationArr = [1, "...", ...pagesArr.slice(-5)];
    }
  }

  const handlePagination = (currPage) => {
    console.log(currPage);
    if (currPage !== "...") {
      dispatch(setCurrentPageAction(currPage));
    }
  };
  const handleNext = () => {
    if (currentPage < pagesCount) {
      dispatch(setCurrentPageAction(currentPage + 1));
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPageAction(currentPage - 1));
    }
  };
  // console.log("paginationArr", paginationArr);
  return (
    <div className={styles.Pagination}>
      <div
        className={classNames(styles.paginationBtn, {
          [styles.paginationBtn_disabled]: currentPage === 1,
        })}
        onClick={handlePrev}
      >
        prev
      </div>
      {paginationArr.map((page, index) => (
        <div
          className={classNames(styles.paginationItem, {
            [styles.paginationItem_active]: currentPage === page,
          })}
          key={index}
          onClick={() => handlePagination(page)}
        >
          {page}
        </div>
      ))}
      <div
        className={classNames(styles.paginationBtn, {
          [styles.paginationBtn_disabled]: currentPage === pagesCount,
        })}
        onClick={handleNext}
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
