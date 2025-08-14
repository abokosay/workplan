import React from "react";

function TopTabs({ tabs, selectedTab, setSelectedTab }) {
  return (
    <div className="top-tabs">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={`tab-button ${selectedTab === tab ? "active" : ""}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TopTabs;
