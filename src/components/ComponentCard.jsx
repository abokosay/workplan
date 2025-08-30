import React, { useState } from "react";

function ComponentCard({ comp }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        className="component-card"
        onClick={() => setShowInfo(true)}
      >
        <div className="component-icon">{comp.icon}</div>
        <div className="component-name">{comp.name}</div>
        <div
          className="component-timeline"
          style={{ width: `${comp.timeline}%` }}
        ></div>
      </div>

      {showInfo && (
        <div className="info-box">
          <span
            className="info-box-close"
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
