import React from "react";

function MindMapNode({ title, isCentral = false }) {
  const nodeClasses = isCentral
    ? "bg-white/20 border-blue-400"
    : "bg-white/10 border-white/20";

  return (
    <div
      className={`p-4 rounded-lg shadow-lg w-48 h-24 flex items-center justify-center text-center text-white border-2 ${nodeClasses}`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
}

export default MindMapNode;
