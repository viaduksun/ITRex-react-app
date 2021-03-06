import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  const filteredUsers = useSelector((state) => state.filteredUsers);
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <>
      {filteredUsers.length > 0 && (
        <div className={styles.ProfileInfo}>
          <h1 className={styles.title}>ProfileInfo</h1>
          {Object.keys(currentUser).length > 0 && (
            <div className={styles.detailes}>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>Selected profile:</div>
                <div className={styles.infoText}>
                  {currentUser.firstName} {currentUser.lastName}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>Description:</div>
                <div className={styles.infoText}>{currentUser.description}</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>Address:</div>
                <div className={styles.infoText}>
                  {currentUser.adress.streetAddress}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>City:</div>
                <div className={styles.infoText}>{currentUser.adress.city}</div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>State:</div>
                <div className={styles.infoText}>
                  {currentUser.adress.state}
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoTitle}>Index:</div>
                <div className={styles.infoText}>{currentUser.adress.zip}</div>
              </div>
            </div>
          )}
          {Object.keys(currentUser).length === 0 && (
            <p className={styles.noUserinfo}>
              Select user to see the profile info
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
