import React from "react";
import styles from "../styles/PhaseToolbar.module.css";

function PhaseToolbar({ phases, activePhase, onSelectPhase }) {
  return (
    <div className={styles.phaseToolbar}>
      {phases.map((phase, idx) => (
        <button
          key={idx}
          className={`${styles.toolbarBtn} ${
            activePhase === phase ? styles.active : ""
          }`}
          onClick={() => onSelectPhase(phase)}
        >
          {phase}
        </button>
      ))}
    </div>
  );
}

export default PhaseToolbar;
