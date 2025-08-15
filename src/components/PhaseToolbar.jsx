import React from "react";

function PhaseToolbar({ phases, selectedPhase, onSelect }) {
  return (
    <div className="phase-toolbar">
      {phases.map((phase, idx) => (
        <button
          key={idx}
          className={`toolbar-btn ${selectedPhase === phase ? "active" : ""}`}
          onClick={() => onSelect(phase)}
        >
          {phase}
        </button>
      ))}
    </div>
  );
}

export default PhaseToolbar;
