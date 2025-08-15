import React, { useState } from "react";
import PhaseToolbar from "./components/PhaseToolbar";
import PhaseSection from "./components/PhaseSection";
import "./styles/main.css";

function App() {
  const phases = [
    "1. التخطيط وتحليل المتطلبات",
    "2. تصميم الـ Database و الـ Multi-Tenant Architecture",
    "3. تصميم الـ UI/UX والهوية",
    "4. البنية الخلفية (Backend API)",
    "5. تطوير الواجهة الأمامية (Frontend)",
    "6. الدفع الإلكتروني والإشعارات",
    "7. الاختبار والجودة",
    "8. النشر والصيانة",
  ];

  const [selectedPhase, setSelectedPhase] = useState(phases[0]);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardData) => {
    if (expandedCard === cardData) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardData);
    }
  };

  const handlePhaseSelect = (phase) => {
    setSelectedPhase(phase);
    setExpandedCard(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">خريطة طريق نظام مطاعم وايت ليبل</h1>
      <PhaseToolbar
        phases={phases}
        selectedPhase={selectedPhase}
        onSelect={handlePhaseSelect}
      />
      <PhaseSection
        phase={selectedPhase}
        expandedCard={expandedCard}
        onCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
