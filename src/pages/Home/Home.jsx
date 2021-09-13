import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src="./img/avatar_01.jpg" alt="avatar" />
          </div>
          <h1 className={styles.headerTitle}>Vadzim Budzko</h1>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Task title</div>
          <div className={styles.content}>User table application</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Task description</div>
          <div className={styles.content}>
            Develop a table using data from the given API. In the table
            implement a click on user function, by which the additional
            information appears in the profile-info block below the table.
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Technology stack involved</div>
          <div className={styles.content}>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>React/Redux</li>
            </ul>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Main project features</div>
          <div className={styles.content}>
            <ul>
              <li>Custom dinamic pagination</li>
              <li>Custom filtering select with multi-options supporting</li>
              <li>Show per-page functionality</li>
              <li>Sorting functionality inside any table column</li>
            </ul>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Time spent on execution</div>
          <div className={styles.content}>3 days</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Source-code link</div>
          <div className={styles.content}>
            <a
              href="https://github.com/viaduksun/ITRex-react-app.git"
              target="_blank"
              rel="noreferrer"
            >
              Git hub repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
