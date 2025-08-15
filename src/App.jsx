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

  const handleCardClick = (cardData) => {
    if (cardData.tasks && cardData.tasks.length > 0) {
      const taskText = cardData.tasks.join("\\n - ");
      alert(`Tasks for ${cardData.name}:\\n\\n - ${taskText}`);
    } else {
      alert(`No tasks for ${cardData.name}.`);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">خريطة طريق نظام مطاعم وايت ليبل</h1>
      <PhaseToolbar
        phases={phases}
        selectedPhase={selectedPhase}
        onSelect={setSelectedPhase}
      />
      <PhaseSection
        phase={selectedPhase}
        onCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
