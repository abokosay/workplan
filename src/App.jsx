import React, { useState } from "react";
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

  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardData) => {
    if (expandedCard === cardData) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardData);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">خريطة طريق نظام مطاعم وايت ليبل</h1>
      <div className="roadmap-container">
        {phases.map((phase) => (
          <PhaseSection
            key={phase}
            phase={phase}
            expandedCard={expandedCard}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
