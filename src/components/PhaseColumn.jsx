import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function PhaseColumn({ title, components, expandedCard, onCardClick }) {
  return (
    <motion.div className="phase-column" variants={columnVariants}>
      <h2>{title}</h2>
      <motion.div className="component-list" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
        {components.map((comp, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            layout
            className={`component-card ${expandedCard === comp ? "expanded" : ""}`}
            onClick={() => onCardClick(comp)}
          >
            <motion.div layout="position" className="component-icon">{comp.icon}</motion.div>
            <motion.div layout="position" className="component-name">{comp.name}</motion.div>
            <AnimatePresence>
              {expandedCard === comp && comp.tasks.length > 0 && (
                <motion.div
                  className="task-list"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {comp.tasks.map((task, taskIdx) => (
                      <li key={taskIdx}>{task}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default PhaseColumn;
