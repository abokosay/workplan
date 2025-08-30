import React, { useRef, useEffect, useState } from "react";
import MindMapNode from "./MindMapNode";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

function MindMap({ data }) {
  const [paths, setPaths] = useState([]);
  const containerRef = useRef(null);
  const centralNodeRef = useRef(null);
  const childNodeRefs = useRef([]);

  useEffect(() => {
    if (!data || !data.children) return;

    const calculatePaths = () => {
      if (!centralNodeRef.current || !containerRef.current) return;

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
          y: childRect.top - containerRect.top + childRect.height / 2,
        };

        const controlX = (centralPoint.x + childPoint.x) / 2;
        const controlY = (centralPoint.y + childPoint.y) / 2;

        const curveX = childPoint.x > centralPoint.x ? controlX + 50 : controlX - 50;
        const curveY = childPoint.y > centralPoint.y ? controlY + 50 : controlY - 50;


        return `M ${centralPoint.x} ${centralPoint.y} Q ${curveX} ${curveY} ${childPoint.x} ${childPoint.y}`;
      }).filter(p => p);

      setPaths(newPaths);
    };

    const timer = setTimeout(calculatePaths, 100);
    window.addEventListener("resize", calculatePaths);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePaths);
    };
  }, [data]);

  if (!data) {
    return null;
  }

  const radius = 300;
  const angleStep = (2 * Math.PI) / (data.children?.length || 1);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-[700px] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div ref={centralNodeRef} className="absolute z-10" variants={itemVariants}>
        <MindMapNode title={data.title} isCentral />
      </motion.div>

      {data.children &&
        data.children.map((child, index) => {
          const angle = angleStep * index - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={index}
              ref={(el) => (childNodeRefs.current[index] = el)}
              className="absolute z-10"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              variants={itemVariants}
            >
              <MindMapNode title={child.title} />
            </motion.div>
          );
        })}

      <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
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
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--secondary)" />
          </marker>
        </defs>
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="var(--secondary)"
            strokeOpacity="0.5"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export default MindMap;
