import React from "react";
import MindMap from "../components/MindMap";

const mindMapData = {
  title: "Make Stories",
  children: [
    { title: "Character" },
    { title: "Setting" },
    { title: "Plot" },
    { title: "Conflict" },
    { title: "Resolution" },
  ],
};

function MakeStories() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-12">Make Stories</h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default MakeStories;
