import React, { useState } from "react";
import PhaseToolbar from "./components/PhaseToolbar";
import PhaseSection from "./components/PhaseSection";
import ModalInfo from "./components/ModalInfo";
import "./styles/main.css";

function App() {
  const phases = [
    "Phase 1: Requirements",
    "Phase 2: System Design",
    "Phase 3: Development",
    "Phase 4: Customization",
    "Phase 5: Deployment",
    "Phase 6: Maintenance",
  ];

  const [selectedPhase, setSelectedPhase] = useState(phases[0]);
  const [modalData, setModalData] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">Interactive Restaurant System - Boss Level</h1>
      <PhaseToolbar
        phases={phases}
        selectedPhase={selectedPhase}
        onSelect={setSelectedPhase}
      />
      <PhaseSection
        phase={selectedPhase}
        onCardClick={(data) => setModalData(data)}
      />
      <ModalInfo
        data={modalData}
        onClose={() => setModalData(null)}
      />
    </div>
  );
}

export default App;
