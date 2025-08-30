import React from "react";
import MindMap from "../components/MindMap";

const mindMapData = {
  title: "Applications System Core",
  children: [
    { title: "Frontend" },
    { title: "Backend" },
    { title: "Database" },
    { title: "Deployment" },
  ],
};

function ApplicationsSystemCore() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-12">Applications System Core</h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default ApplicationsSystemCore;
