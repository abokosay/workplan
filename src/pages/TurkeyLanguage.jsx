import React from "react";
import MindMap from "../components/MindMap";

const mindMapData = {
  title: "Turkey Language",
  children: [
    { title: "Alphabet" },
    { title: "Grammar" },
    { title: "Vocabulary" },
    { title: "Pronunciation" },
    { title: "Conversation" },
  ],
};

function TurkeyLanguage() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-12">Turkey Language</h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default TurkeyLanguage;
