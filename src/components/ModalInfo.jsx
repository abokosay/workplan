import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ModalInfo.module.css";

function ModalInfo({ data, onClose }) {
  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modalBox}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.modalClose} onClick={onClose}>
            ✖
          </button>
          <h3>{data.name}</h3>
          <ul>
            {data.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalInfo;
