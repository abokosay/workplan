import React from "react";

function MindMapNode({ title, isCentral = false }) {
  const baseClasses =
    "p-4 rounded-lg shadow-lg flex items-center justify-center text-center border-2 transition-all duration-300";

  const nodeClasses = isCentral
    ? `bg-[var(--primary)] border-transparent w-56 h-32`
    : `bg-[var(--card-background)] border-[var(--card-border)] w-48 h-24 hover:bg-[var(--card-hover-background)] hover:border-[var(--secondary)]`;

  const titleClasses = isCentral ? "text-xl font-bold text-white" : "text-lg font-semibold text-[var(--text-light)]";

  return (
    <div className={`${baseClasses} ${nodeClasses}`}>
      <h3 className={titleClasses}>{title}</h3>
    </div>
  );
}

export default MindMapNode;
