import React, { useRef, useEffect, useState } from "react";
import MindMapNode from "./MindMapNode";

function MindMap({ data }) {
  const [paths, setPaths] = useState([]);
  const containerRef = useRef(null);
  const centralNodeRef = useRef(null);
  const childNodeRefs = useRef([]);

  useEffect(() => {
    if (!data || !data.children) return;

    const calculatePaths = () => {
      if (!centralNodeRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const centralRect = centralNodeRef.current.getBoundingClientRect();
      const centralPoint = {
        x: centralRect.left - containerRect.left + centralRect.width / 2,
        y: centralRect.top - containerRect.top + centralRect.height / 2,
      };

      const newPaths = childNodeRefs.current.map((childRef) => {
        if (!childRef) return null;
        const childRect = childRef.getBoundingClientRect();
        const childPoint = {
          x: childRect.left - containerRect.left + childRect.width / 2,
          y: childRect.top - containerRect.top,
        };

        const controlX = centralPoint.x;
        const controlY = childPoint.y;

        return `M ${centralPoint.x} ${centralPoint.y} Q ${controlX} ${controlY} ${childPoint.x} ${childPoint.y}`;
      }).filter(p => p);

      setPaths(newPaths);
    };

    // Calculate paths on mount and on window resize
    calculatePaths();
    window.addEventListener("resize", calculatePaths);
    return () => window.removeEventListener("resize", calculatePaths);
  }, [data]);

  if (!data) {
    return null;
  }

  const radius = 250; // Radius of the circle for child nodes
  const angleStep = (2 * Math.PI) / (data.children?.length || 1);

  return (
    <div ref={containerRef} className="relative w-full min-h-[600px] flex items-center justify-center">
      <div ref={centralNodeRef} className="absolute">
        <MindMapNode title={data.title} isCentral />
      </div>

      {data.children &&
        data.children.map((child, index) => {
          const angle = angleStep * index - Math.PI / 2; // Start from top
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={index}
              ref={(el) => (childNodeRefs.current[index] = el)}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <MindMapNode title={child.title} />
            </div>
          );
        })}

      <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
          </marker>
        </defs>
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            stroke="white"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
          />
        ))}
      </svg>
    </div>
  );
}

export default MindMap;
