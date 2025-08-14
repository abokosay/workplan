import React, { useState } from "react";
import TopTabs from "../components/TopTabs";
import CardGallery from "../components/CardGallery";
import InfoList from "../components/InfoList";

const data = {
  "Category 1": {
    cards: { left: "L1", main: "M1", right: "R1" },
    info: ["Detail 1", "Detail 2", "Detail 3"],
  },
  "Category 2": {
    cards: { left: "L2", main: "M2", right: "R2" },
    info: ["Info A", "Info B", "Info C"],
  },
  "Category 3": {
    cards: { left: "L3", main: "M3", right: "R3" },
    info: ["Text X", "Text Y", "Text Z"],
  },
};

function Dashboard() {
  const tabs = Object.keys(data);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="dashboard">
      <TopTabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CardGallery cards={data[selectedTab].cards} />
      <InfoList info={data[selectedTab].info} />
    </div>
  );
}

export default Dashboard;
