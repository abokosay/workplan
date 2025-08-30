import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Applications System Core",
    path: "/applications-system-core",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
    svgColor: "text-blue-400",
  },
  {
    id: 2,
    title: "make stories",
    path: "/make-stories",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.747-8.247l11.494 4.494-4.494 11.494-7-7-4.494-11.494z" />
      </svg>
    ),
    svgColor: "text-green-400",
  },
  {
    id: 3,
    title: "Google ads",
    path: "/google-ads",
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    ),
    svgColor: "text-red-400",
  },
  {
    id: 4,
    title: "kitchen installation",
    path: "/kitchen-installation",
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    svgColor: "text-yellow-400",
  },
  {
    id: 5,
    title: "turkey language",
    path: "/turkey-language",
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m4 10h4m-4 0l-4 4m0-4l4 4m6-12v12a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
    ),
    svgColor: "text-purple-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


function Dashboard() {
  return (
    <main className="text-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-12 text-[var(--primary)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My 2030 Vision
      </motion.h1>

      <motion.section
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card) => (
          <Link to={card.path} key={card.id}>
            <motion.div
              className="bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg shadow-lg flex flex-col items-center justify-center w-64 h-64 transition-all duration-300 hover:bg-[var(--card-hover-background)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <div className={card.svgColor}>{card.svg}</div>
              <h2 className="text-2xl font-bold text-[var(--text-light)] text-center p-4 mt-4">
                {card.title}
              </h2>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      <section className="mt-16">
        <div className="w-full max-w-2xl mx-auto bg-[var(--background-light)] rounded-full h-2.5">
          <div className="bg-[var(--primary)] h-2.5 rounded-full" style={{ width: "10%" }}></div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
