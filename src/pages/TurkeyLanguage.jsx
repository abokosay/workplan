import React from "react";
import MindMap from "../components/MindMap";
import { motion } from "framer-motion";

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
    <div className="text-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-12 text-[var(--primary)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Turkey Language
      </motion.h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default TurkeyLanguage;
