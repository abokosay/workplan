import React from "react";

function MindMapNode({ title, isCentral = false }) {
  const baseClasses =
    "p-4 rounded-lg shadow-lg flex items-center justify-center text-center text-white border-2 transition-all duration-300";

  const nodeClasses = isCentral
    ? `bg-white/20 border-blue-400 w-56 h-32`
    : `bg-white/10 border-white/20 w-48 h-24 hover:bg-white/20 hover:border-white/40`;

  const titleClasses = isCentral ? "text-xl font-bold" : "text-lg font-semibold";

  return (
    <div className={`${baseClasses} ${nodeClasses}`}>
      <h3 className={titleClasses}>{title}</h3>
    </div>
  );
}

export default MindMapNode;
