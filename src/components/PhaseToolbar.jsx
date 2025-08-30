import React from "react";

function PhaseToolbar({ phases, activePhase, onSelectPhase }) {
  return (
    <div className="phase-toolbar">
      {phases.map((phase, idx) => (
        <button
          key={idx}
          className={`toolbar-btn ${activePhase === phase ? "active" : ""}`}
          onClick={() => onSelectPhase(phase)}
        >
          {phase}
        </button>
      ))}
    </div>
  );
}

export default PhaseToolbar;
