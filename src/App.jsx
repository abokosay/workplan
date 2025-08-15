import React from "react";
import KanbanBoard from "./components/KanbanBoard";
import "./styles/main.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">خريطة طريق نظام مطاعم وايت ليبل</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
