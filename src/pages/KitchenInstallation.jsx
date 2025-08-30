import React from "react";
import MindMap from "../components/MindMap";

const mindMapData = {
  title: "Kitchen Installation",
  children: [
    { title: "Design" },
    { title: "Plumbing" },
    { title: "Electrical" },
    { title: "Cabinetry" },
    { title: "Appliances" },
  ],
};

function KitchenInstallation() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-12">Kitchen Installation</h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default KitchenInstallation;
