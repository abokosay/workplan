import React, { useState } from "react";
import styles from "../styles/ComponentCard.module.css";
import modalStyles from "../styles/ModalInfo.module.css";

function ComponentCard({ comp }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        className={styles.componentCard}
        onClick={() => setShowInfo(true)}
      >
        <div className={styles.componentIcon}>{comp.icon}</div>
        <div className={styles.componentName}>{comp.name}</div>
        <div
          className={styles.componentTimeline}
          style={{ width: `${comp.timeline}%` }}
        ></div>
      </div>

      {showInfo && (
        <div className={modalStyles.infoBox}>
          <span
            className={modalStyles.infoBoxClose}
            onClick={() => setShowInfo(false)}
          >
            ✖
          </span>
          <h3>Component Details</h3>
          <p>{comp.info}</p>
          <h4>Engineer Tasks</h4>
          <ul>
            {comp.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ComponentCard;
